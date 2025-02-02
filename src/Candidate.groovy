class Candidate extends AbstractPerson {
    String personalID // CPF
    int age

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
