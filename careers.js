const jobs = [
  {
    title: "Claims Adjuster",
    location: "Bend, OR",
    type: "Full-Time",
    category: "Customer Service",
    description: "Investigate insurance claims to determine liability. Ideal for someone with strong attention to detail and empathy.",
    applyLink: "#"
  },
  {
    title: "Underwriting Analyst",
    location: "Remote",
    type: "Full-Time",
    category: "IT",
    description: "Evaluate client data to determine insurance risk. Must be comfortable with Excel and risk models.",
    applyLink: "#"
  },
  {
    title: "Sales Representative",
    location: "Bend, OR",
    type: "Full-Time",
    category: "Sales",
    description: "Sell personalized insurance plans and grow client relationships.",
    applyLink: "#"
  },
  {
    title: "Marketing Manager",
    location: "Remote",
    type: "Part-Time",
    category: "Marketing",
    description: "Develop campaigns across email, digital, and print. Lead a small team of designers and writers.",
    applyLink: "#"
  },
  {
    title: "IT Support Technician",
    location: "Bend, OR",
    type: "Full-Time",
    category: "IT",
    description: "Provide day-to-day technical support for all internal departments. Hybrid position.",
    applyLink: "#"
  },
  {
    title: "HR Generalist",
    location: "Bend, OR",
    type: "Full-Time",
    category: "Customer Service",
    description: "Support recruiting, onboarding, and employee engagement initiatives.",
    applyLink: "#"
  },
  {
    title: "Content Writer",
    location: "Remote",
    type: "Contract",
    category: "Marketing",
    description: "Create articles and landing pages related to home and auto insurance topics.",
    applyLink: "#"
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-Time",
    category: "IT",
    description: "Manage cloud-based deployments and CI/CD pipelines. Requires AWS experience.",
    applyLink: "#"
  }
];

// Selectors
const jobListings = document.getElementById("jobListings");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const searchInput = document.getElementById("searchInput");

// Render Jobs
function renderJobs(filteredJobs) {
  jobListings.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobListings.innerHTML = "<p>No job listings match your criteria.</p>";
    return;
  }

  filteredJobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p>${job.description}</p>
      <a href="${job.applyLink}" class="apply-btn">Apply Now</a>
    `;

    jobListings.appendChild(jobCard);
  });
}

// Filter Jobs
function filterJobs() {
  const category = categoryFilter.value;
  const location = locationFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = category === "" || job.category === category;
    const matchesLocation = location === "" || job.location === location;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesLocation && matchesSearch;
  });

  renderJobs(filteredJobs);
}

// Initial load
renderJobs(jobs);

// Event listeners
categoryFilter.addEventListener("change", filterJobs);
locationFilter.addEventListener("change", filterJobs);
searchInput.addEventListener("input", filterJobs);
