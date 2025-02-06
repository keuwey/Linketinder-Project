import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

import static org.junit.jupiter.api.Assertions.assertEquals

class CandidateTest {
    Candidate johann

    @BeforeEach
    void setUp() {
        johann = new Candidate("Johann", "johann.packer@gmail.com", "08936601993", 26, "NY", "40252-005", "Fullstack java developer", ["java", "angular", "python", "groovy"])
    }

    @Test
    void testCandidatePersonalID() {
        String expectedID = "08936601993"
        assertEquals(expectedID, johann.personalID)
    }
}