var questions = [
    {
        question: "A DNA double helix contains 1000 base pairs (bp). If the molecule has 200 adenine (A) bases, how many cytosine (C) bases does it contain?",
        options: ["a) 300", "b) 800", "c) 400", "d) 600"],
        answer: 2, // "c) 400"
        explanation: "There are 200 adenine bases paired with 200 thymine bases, leaving 800 bases, which are evenly split between cytosine and guanine, thus 400 cytosine bases."
    },
    {
        question: "In a segment of DNA with 1500 base pairs, the number of hydrogen bonds can be calculated if the DNA contains 600 adenine (A) and 600 thymine (T) bases. How many hydrogen bonds are present in this segment?",
        options: ["a) 3600", "b) 4500", "c) 4200", "d) 4800"],
        answer: 0, // "a) 3600"
        explanation: " 600 A-T pairs contribute 1200 hydrogen bonds and the remaining 900 G-C pairs contribute 2700 hydrogen bonds, totaling 3900."
    },
    {
        question: "A DNA fragment has a total of 120 nucleotides. If there are 30 guanine (G) bases, how many adenine (A) bases are there in this fragment?",
        options: ["a) 30", "b) 60", "c) 90", "d) 120"],
        answer: 0, // "a) 30"
        explanation: "With 30 guanine bases paired with 30 cytosine bases, the remaining 60 bases are evenly split between adenine and thymine, so there are 30 adenine bases."
    },
    {
        question: "If a gene is 3000 base pairs long, how many nucleotides does it contain?",
        options: ["a) 3000", "b) 6000", "c) 4500", "d) 1500"],
        answer: 1, // "b) 6000"
        explanation: "Each base pair has two nucleotides, so 3000 base pairs equal 6000 nucleotides."
    },
    {
        question: "A segment of DNA is 10,000 base pairs long. The distance between each base pair is 0.34 nm. What is the total length of this DNA segment in micrometers (µm)?",
        options: ["a) 1.7 µm", "b) 3.4 µm", "c) 3.4 nm", "d) 0.34 µm"],
        answer: 1, // "b) 3.4 µm"
        explanation: " 10,000 base pairs × 0.34 nm = 3400 nm = 3.4 µm."
    },
    {
        question: "A DNA molecule has a total of 5000 hydrogen bonds. If the number of cytosine (C) and guanine (G) bases together is 1500, how many thymine (T) bases are present?",
        options: ["a) 2000", "b) 2500", "c) 1000", "d) 500"],
        answer: 3, // "d) 500"
        explanation: "1500 C-G pairs contribute 4500 hydrogen bonds, leaving 500 hydrogen bonds for 250 A-T pairs, thus 500 T bases."
    },
    {
        question: "A DNA sequence contains 40% cytosine (C). What percentage of adenine (A) does it contain?",
        options: ["a) 40%", "b) 20%", "c) 30%", "d) 10%"],
        answer: 3, // "d) 10%"
        explanation: "40% C pairs with 40% G, leaving 20% for A-T pairs, thus 10% A."
    },
    {
        question: "A strand of RNA contains 300 nucleotides, with 90 adenine (A) bases. How many uracil (U) bases are present in this RNA strand?",
        options: ["a) 210", "b) 90", "c) 150", "d) 300"],
        answer: 1, // "b) 90"
        explanation: "In RNA, adenine (A) pairs with uracil (U) instead of thymine (T). Since there are 90 adenine bases, there must be 90 uracil bases to pair with them."
    },
    {
        question: "In a DNA segment, if there are 120 phosphate groups, how many deoxyribose sugars are there?",
        options: ["a) 30", "b) 60", "c) 120", "d) 240"],
        answer: 2, // "c) 120"
        explanation: " Each nucleotide in DNA consists of one phosphate group, one deoxyribose sugar, and one nitrogenous base. Therefore, the number of phosphate groups equals the number of deoxyribose sugars. If there are 120 phosphate groups, there are also 120 deoxyribose sugars."
    },
    {
        question: "A gene is composed of 10 exons and 9 introns. If each exon is 150 base pairs long and each intron is 100 base pairs long, what is the total length of the gene?",
        options: ["a) 2500 bp", "b) 2550 bp", "c) 2250 bp", "d) 2350 bp"],
        answer: 1, // "b) 2550 bp"
        explanation: "The total length of the gene can be calculated by summing the lengths of all exons and introns:\nLength of exons = 10 exons × 150 bp = 1500 bp\nLength of introns = 9 introns × 100 bp = 900 bp\nTotal length = 1500 bp + 900 bp = 2400 bp"
    },
    {
        question: "If a single strand of DNA has 1000 nucleotides, how many phosphodiester bonds are present in this strand?",
        options: ["a) 999", "b) 1000", "c) 1998", "d) 2000"],
        answer: 0, // "a) 999"
        explanation: "Phosphodiester bonds connect adjacent nucleotides in a DNA strand. If there are 1000 nucleotides, there will be 999 phosphodiester bonds (one less bond than the number of nucleotides)."
    },
    {
        question: "How many amino acids will be encoded by a gene that is 1800 base pairs long (assuming no introns)?",
        options: ["a) 600", "b) 900", "c) 1800", "d) 3600"],
        answer: 0, // "a) 600"
        explanation: "Each amino acid is encoded by a triplet codon of three nucleotides. If the gene is 1800 base pairs long, it will encode 600 amino acids."
    },
    {
        question: "If a DNA sample contains 23% adenine (A), what is the percentage of guanine (G) in this sample?",
        options: ["a) 23%", "b) 27%", "c) 46%", "d) 50%"],
        answer: 1, // "b) 27%"
        explanation: "If 23% of the DNA is adenine (A), then 23% must also be thymine (T) because A pairs with T. This leaves 100% - 23% - 23% = 54% for cytosine (C) and guanine (G), which are present in equal amounts. Therefore, the percentage of guanine (G) is 27%."
    },
    {
        question: "How many total bonds (including hydrogen and phosphodiester bonds) are present in a DNA molecule containing 1500 base pairs?",
        options: ["a) 4500", "b) 3000", "c) 6000", "d) 3500"],
        answer: 2, // "c) 6000"
        explanation: "Hydrogen bonds: Each A-T pair has 2 hydrogen bonds, and each G-C pair has 3 hydrogen bonds. However, without knowing the exact sequence, we typically estimate an average of 2.5 hydrogen bonds per base pair for this calculation: 1500 base pairs × 2.5 hydrogen bonds = 3750 hydrogen bonds Phosphodiester bonds: There are 2999 phosphodiester bonds in each strand (2 strands, so total 5998 bonds) Ans:- c. 6000."
    }
      ];