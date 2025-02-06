import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import static org.junit.jupiter.api.Assertions.*

class UserRegistrationTest {
    Candidate candidate
    Company company

    @BeforeEach
    void setUp() {
        candidate = new Candidate("John", "john.connor@gmail.com", "05926607493", 30, "NY", "45875968", "Java developer", ["groovy","spring", "angular"])

        company = new Company("TechCorp", "contact@techcorp.com","NY", "783624", "We are here to help you archive your goal on the digital world", ["java", "groovy", "spring","angular"])
    }

    @Test
    void testCandidateRegistration() {
        assertEquals("John", candidate.name)
        assertEquals("john.connor@gmail.com", candidate.email)
        assertEquals("05926607493", candidate.personalID)
        assertEquals(30, candidate.age)
    }

    @Test
    void testCompanyRegistration() {
        assertEquals("TechCorp", company.name)
        assertEquals("contact@techcorp.com", company.email)
    }

    @Test
    void testAddSkillToCandidate() {
        candidate.skills.add("Java")

        assertEquals(4, candidate.skills.size())
        assertTrue(candidate.skills.contains("Java"))
    }
}
