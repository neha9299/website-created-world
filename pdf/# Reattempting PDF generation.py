# Reattempting PDF generation

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", style="B", size=16)

# Title
pdf.cell(200, 10, "Project Report: Movie Seat Booking System", ln=True, align="C")
pdf.ln(10)

# Set font for content
pdf.set_font("Arial", size=12)

# Sections
sections = {
    "Introduction": "The Movie Seat Booking System is an interactive web application that allows users to "
                    "choose movies, select available seats, and view the total cost dynamically. It enhances the "
                    "movie ticket booking experience through an intuitive user interface and real-time price calculation.",

    "Problem Statement": "Traditional movie ticket booking systems require users to visit physical counters "
                         "or third-party platforms. Our system simplifies the process by enabling direct seat selection and "
                         "price calculation on a user-friendly webpage.",

    "Technologies Used": "- HTML for structure\n- CSS for styling\n- JavaScript for interactivity and calculations",

    "Working Mechanism": "- Users select a movie from a dropdown list.\n"
                         "- Seats are displayed in a grid format with selectable options.\n"
                         "- Total price updates dynamically based on selected seats.\n"
                         "- The system retains selections using local storage.",

    "Key Features": "- Movie selection with dynamic pricing\n- Interactive seat selection\n"
                    "- Real-time price calculation\n- Persistent data storage",

    "Formulas or Calculations": "Total Price = Number of Selected Seats × Ticket Price per Seat",

    "Output & Results": "- A fully functional seat booking system where users can select seats and view "
                        "the total cost dynamically.\n- Selected seats remain highlighted, and unavailable seats are visibly distinct.",

    "Conclusion": "The Movie Seat Booking System provides an efficient and user-friendly solution for "
                  "reserving movie tickets online. Future improvements could include payment integration and user authentication."
}

# Adding content to the PDF
for title, content in sections.items():
    pdf.set_font("Arial", style="B", size=14)
    pdf.cell(0, 10, title, ln=True)
    pdf.ln(2)
    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, content)
    pdf.ln(5)

# Save PDF
pdf_path = "/mnt/data/Movie_Seat_Booking_Report.pdf"
pdf.output(pdf_path)

pdf_path
