class Company extends AbstractPerson {
    String ein // CNPJ
    String country

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
