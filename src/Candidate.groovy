class Candidate extends AbstractPerson {
    String personalID // CPF
    int age

    Candidate(String name, String email, String personalID, short age, String state, String zipCode, String description, List<String> skills) {
        this.name = name
        this.email = email
        this.personalID = personalID
        this.age = age
        this.state = state
        this.zipCode = zipCode
        this.description = description
        this.skills = skills
    }

    String toString() {
        """
            Name: $name
            Email: $email
            ID: $personalID
            Age: $age
            Location: $state, $zipCode
            Description: $description
            Skills: ${skills.join(', ')}
        """
    }
}
