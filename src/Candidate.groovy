class Candidate extends AbstractPerson {
    String personalID // CPF
    int age

    Candidate(String name, String email, String personalID, int age, String state, String zipCode, String description, List<String> skills) {
        super(name, email, state, zipCode, description, skills)
        this.personalID = personalID
        this.age = age
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
