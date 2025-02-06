import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

import static org.junit.jupiter.api.Assertions.assertEquals

class CandidateTest {
    Candidate kevin

    @BeforeEach
    void setUp() {
        kevin = new Candidate("kevin", "keuwey@gmail.com", "08926607593", (short)23, "BA", "40252-005", "Fullstack java developer", ["java", "angular", "python", "groovy"])
    }

    @Test
    void testCandidatePersonalID() {
        String expectedID = "08926607593"
        assertEquals(expectedID, kevin.personalID)
    }
}