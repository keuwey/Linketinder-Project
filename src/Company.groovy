class Company extends AbstractPerson {
    String ein // CNPJ
    String country

    Company(String name, String email, String state, String zipCode, String description, List<String> skills) {
        super(name, email, state, zipCode, description, skills)
        this.ein = ein
        this.country = country
    }

    String toString() {
        """
            Name: $name
            Email: $email
            EIN: $ein
            Location: $country, $state, $zipCode
            Description: $description
            Required Skills: ${skills.join(', ')}
        """
    }
}
