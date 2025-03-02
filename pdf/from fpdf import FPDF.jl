from fpdf import FPDF

# Create PDF instance
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", style="B", size=16)

# Title
pdf.cell(200, 10, "Project Report: Movie Seat Booking System", ln=True, align="C")
pdf.ln(10)

# Set font for content
pdf.set_font("Arial", size=12)

# Introduction
pdf.multi_cell(0, 10, "Introduction:\nThe Movie Seat Booking System is an interactive web application that allows users to "
                      "choose movies, select available seats, and view the total cost dynamically. It enhances the "
                      "movie ticket booking experience through an intuitive user interface and real-time price calculation.")
pdf.ln(5)

# Problem Statement
pdf.multi_cell(0, 10, "Problem Statement:\nTraditional movie ticket booking systems require users to visit physical counters "
                      "or third-party platforms. Our system simplifies the process by enabling direct seat selection and "
                      "price calculation on a user-friendly webpage.")
pdf.ln(5)

# Technologies Used
pdf.multi_cell(0, 10, "Technologies Used:\n- HTML for structure\n- CSS for styling\n- JavaScript for interactivity and calculations")
pdf.ln(5)

# Working Mechanism
pdf.multi_cell(0, 10, "Working Mechanism:\n- Users select a movie from a dropdown list.\n"
                      "- Seats are displayed in a grid format with selectable options.\n"
                      "- Total price updates dynamically based on selected seats.\n"
                      "- The system retains selections using local storage.")
pdf.ln(5)

# Key Features
pdf.multi_cell(0, 10, "Key Features:\n- Movie selection with dynamic pricing\n- Interactive seat selection\n"
                      "- Real-time price calculation\n- Persistent data storage")
pdf.ln(5)

# Formulas or Calculations
pdf.multi_cell(0, 10, "Formulas or Calculations:\nTotal Price = Number of Selected Seats × Ticket Price per Seat")
pdf.ln(5)

# Output & Results
pdf.multi_cell(0, 10, "Output & Results:\n- A fully functional seat booking system where users can select seats and view "
                      "the total cost dynamically.\n- Selected seats remain highlighted, and unavailable seats are visibly distinct.")
pdf.ln(5)

# Conclusion
pdf.multi_cell(0, 10, "Conclusion:\nThe Movie Seat Booking System provides an efficient and user-friendly solution for "
                      "reserving movie tickets online. Future improvements could include payment integration and user authentication.")

# Save PDF
pdf_path = "/mnt/data/Movie_Seat_Booking_Report.pdf"
pdf.output(pdf_path)

pdf_path
