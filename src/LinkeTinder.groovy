List<Candidate> candidates = [
        new Candidate(
                name: "John Smith",
                email: "john@example.com",
                personalID: "ID001",
                age: 28,
                state: "CA",
                zipCode: "90210",
                description: "Full-stack developer",
                skills: ["JavaScript", "React", "Node.js"]
        ),
        new Candidate(
                name: "Sarah Johnson",
                email: "sarah@example.com",
                personalID: "ID002",
                age: 32,
                state: "NY",
                zipCode: "10001",
                description: "DevOps Engineer",
                skills: ["AWS", "Docker", "Kubernetes"]
        ),
        new Candidate(
                name: "Mike Chen",
                email: "mike@example.com",
                personalID: "ID003",
                age: 25,
                state: "TX",
                zipCode: "73301",
                description: "Frontend Developer",
                skills: ["Angular", "TypeScript", "HTML5"]
        ),
        new Candidate(
                name: "Emma Wilson",
                email: "emma@example.com",
                personalID: "ID004",
                age: 30,
                state: "FL",
                zipCode: "33101",
                description: "Data Scientist",
                skills: ["Python", "Machine Learning", "Pandas"]
        ),
        new Candidate(
                name: "David Brown",
                email: "david@example.com",
                personalID: "ID005",
                age: 35,
                state: "WA",
                zipCode: "98101",
                description: "Backend Developer",
                skills: ["Java", "Spring Boot", "MySQL"]
        )
]

List<Company> companies = [
        new Company(
                name: "Good-Rice",
                email: "careers@goodrice.com",
                ein: "EIN001",
                country: "USA",
                state: "CA",
                zipCode: "90210",
                description: "Agricultural technology innovator",
                skills: ["Supply Chain", "IoT", "Python"]
        ),
        new Company(
                name: "Bawling Empire",
                email: "hr@bawling.com",
                ein: "EIN002",
                country: "USA",
                state: "NY",
                zipCode: "10001",
                description: "Entertainment and media conglomerate",
                skills: ["Video Production", "Marketing", "Social Media"]
        ),
        new Company(
                name: "Tech Innovators",
                email: "info@techinnovators.com",
                ein: "EIN003",
                country: "USA",
                state: "TX",
                zipCode: "73301",
                description: "Software development company",
                skills: ["Java", "Cloud Computing", "Microservices"]
        ),
        new Company(
                name: "Data Wizards",
                email: "contact@datawizards.com",
                ein: "EIN004",
                country: "Canada",
                state: "ON",
                zipCode: "M5H1N9",
                description: "Big data analytics firm",
                skills: ["Python", "Spark", "Hadoop"]
        ),
        new Company(
                name: "Cloud Masters",
                email: "support@cloudmasters.com",
                ein: "EIN005",
                country: "UK",
                state: "LN",
                zipCode: "SW1A1AA",
                description: "Cloud infrastructure specialists",
                skills: ["AWS", "Azure", "DevOps"]
        )
]

while (true) {
    println "\n=== LinkeTinder MVP ==="
    println "1. List Candidates"
    println "2. List Companies"
    println "3. Register Candidate"
    println "4. Register Company"
    println "5. Exit"
    print "Select an option: "

    def choice = System.console().readLine().trim()

    switch (choice) {
        case '1':
            println "\n--- Candidates ---"
            candidates.each { println it }
            break
        case '2':
            println "\n--- Companies ---"
            companies.each { println it }
            break
        case '3':
            try {
                def candidate = new Candidate()
                print "\nEnter candidate name: "
                candidate.name = System.console().readLine().trim()
                print "Enter email: "
                candidate.email = System.console().readLine().trim()
                print "Enter personal ID: "
                candidate.personalID = System.console().readLine().trim()
                print "Enter age: "
                candidate.age = Integer.parseInt(System.console().readLine().trim())
                print "Enter state: "
                candidate.state = System.console().readLine().trim()
                print "Enter ZIP code: "
                candidate.zipCode = System.console().readLine().trim()
                print "Enter description: "
                candidate.description = System.console().readLine().trim()
                print "Enter skills (comma-separated): "
                candidate.skills = System.console().readLine().trim().split(/,\s*/) as List

                candidates << candidate
                println "\nCandidate registered successfully!"
            } catch (Exception e) {
                println "\nError registering candidate: ${e.message}"
            }
            break
        case '4':
            try {
                def company = new Company()
                print "\nEnter company name: "
                company.name = System.console().readLine().trim()
                print "Enter corporate email: "
                company.email = System.console().readLine().trim()
                print "Enter EIN: "
                company.ein = System.console().readLine().trim()
                print "Enter country: "
                company.country = System.console().readLine().trim()
                print "Enter state: "
                company.state = System.console().readLine().trim()
                print "Enter ZIP code: "
                company.zipCode = System.console().readLine().trim()
                print "Enter description: "
                company.description = System.console().readLine().trim()
                print "Enter required skills (comma-separated): "
                company.skills = System.console().readLine().trim().split(/,\s*/) as List

                companies << company
                println "\nCompany registered successfully!"
            } catch (Exception e) {
                println "\nError registering company: ${e.message}"
            }
            break
        case '5':
            println "\nExiting LinkeTinder..."
            System.exit(0)
            break
        default:
            println "\nInvalid option. Please try again."
    }
}