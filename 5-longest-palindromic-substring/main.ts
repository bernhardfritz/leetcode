import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";

const intDivision = (dividend: number, divisor: number) => (dividend / divisor) >> 0;

const isPalindrome = (s: string, start: number, end: number) => {
  const mid = start + intDivision(end - start, 2);
  for (let i = start, j = end - 1; i < mid; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

function longestPalindrome(s: string): string {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j + i <= s.length; j++) {
      if (isPalindrome(s, j, j + i)) {
        return s.slice(j, j + i);
      }
    }
  }
  throw new Error('This should never happen!');
}

Deno.test("Example 1", () => {
  const input: Parameters<typeof longestPalindrome> = ["babad"];

  const output = longestPalindrome(...input)!;

  assertEquals(output, "bab");
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof longestPalindrome> = ["cbbd"];

  const output = longestPalindrome(...input)!;

  assertEquals(output, "bb");
});

Deno.test("Example 3", () => {
  const input: Parameters<typeof longestPalindrome> = ["bb"];

  const output = longestPalindrome(...input)!;

  assertEquals(output, "bb");
});

Deno.test("Example 4", () => {
  const input: Parameters<typeof longestPalindrome> = ["ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"];

  const output = longestPalindrome(...input)!;

  assertEquals(output, "fklkf");
});

Deno.test("Example 5", () => {
  const input: Parameters<typeof longestPalindrome> = ["aacabdkacaa"];

  const output = longestPalindrome(...input)!;

  assertEquals(output, "aca");
});