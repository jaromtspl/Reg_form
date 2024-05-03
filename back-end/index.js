const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { name, domain, current, expected, work, email, phone } = req.body;

    // Validate form data here if necessary

    const regForm = await prisma.regformdetails.create({
      data: {
        name,
        domain,
        currentSalary: parseInt(current), // Convert string to integer
        expectedSalary: parseInt(expected), // Convert string to integer
        workExperience: parseInt(work), // Convert string to integer
        email,
        PhoneNumber: phone // Convert string to integer
      }
    });

    res.status(201).json(regForm);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(7000, () => {
  console.log(`Server started on port 7000`);
});
