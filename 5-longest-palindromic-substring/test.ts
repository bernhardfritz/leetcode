import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { longestPalindrome } from "./mod.ts";

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