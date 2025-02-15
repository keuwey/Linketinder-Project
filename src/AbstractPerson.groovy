abstract class AbstractPerson {
    String name
    String email
    String state
    String zipCode
    String description
    List<String> skills = []

    AbstractPerson(String name, String email, String state, String zipCode, String description, List<String> skills) {
        this.name = name
        this.email = email
        this.state = state
        this.zipCode = zipCode
        this.description = description ?: ""
        this.skills = skills
    }

    String getName() {
        return name
    }

    String getEmail() {
        return email
    }

    String getState() {
        return state
    }

    String getZipCode() {
        return zipCode
    }

    String getDescription() {
        return description
    }

    List<String> getSkills() {
        return skills
    }
}