import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Generates a professional multi-page PDF from a DOM element.
 * Optimized for A4 size and high-resolution output.
 */
export const generateDossier = async (element) => {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2, // High resolution
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    
    // A4 dimensions in mm
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate image dimensions to fit PDF width
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = pdfWidth / (imgWidth / 2); // /2 because of scale: 2
    const totalPdfHeight = (imgHeight / 2) * ratio;
    
    let heightLeft = totalPdfHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, totalPdfHeight);
    heightLeft -= pdfHeight;

    // Add subsequent pages if the content is longer than A4
    while (heightLeft >= 0) {
      position = heightLeft - totalPdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, totalPdfHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save('NEXUM_Dossier_Corporativo_2026.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
