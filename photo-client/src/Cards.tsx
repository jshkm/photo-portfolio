import Data from './data'

interface Data {
    path: string;
    fit: string;
    aspect: string;
    location: string;
}

interface Card {
    photos: Data[];
    layout: number;
}

interface CardsType {
    [key: string]: Card[];
}

const cards: CardsType = {
    'home' : [
        {'photos': [Data.b12], 'layout': 16
        },
        {'photos': [Data.n1, Data.n3, Data.n4], 'layout': 7
        },
        {'photos': [Data.a23], 'layout': 15
        },
        {'photos': [Data.a13, Data.b15], 'layout': 14
        },
        {'photos': [Data.s1], 'layout': 16
        },
        {'photos': [Data.a24], 'layout': 15
        },
        {'photos': [Data.s12, Data.s13], 'layout': 14
        },
        {'photos': [Data.s14], 'layout': 16
        },
        {'photos': [Data.b2], 'layout': 15
        },
        {'photos': [Data.b8], 'layout': 16
        },
        {'photos': [Data.n5], 'layout': 15
        },
        {'photos': [Data.a9, Data.a11], 'layout': 11
        },
        {'photos': [Data.a16], 'layout': 15
        }
    ],
    'new york city' : [
        {'photos': [Data.n5], 'layout': 15
        },
        {'photos': [Data.n7, Data.n6], 'layout': 12
        },
        {'photos': [Data.n15], 'layout': 15
        },
        {'photos': [Data.n14, Data.n13], 'layout': 11
        },
        {'photos': [Data.n12, Data.n11], 'layout': 12
        },
        {'photos': [Data.n10], 'layout': 15
        },
        {'photos': [Data.n9, Data.n8], 'layout': 10
        },
        {'photos': [Data.n1, Data.n3, Data.n4], 'layout': 7
        }
    ],
    'atlanta' : [
        {'photos': [Data.a9], 'layout': 15},
        {'photos': [Data.a5, Data.a17], 'layout': 11},
        {'photos': [Data.a14, Data.a10], 'layout': 11},
        {'photos': [Data.a12], 'layout': 15},
        {'photos': [Data.a19, Data.a20, Data.a18], 'layout': 1},
        {'photos': [Data.a13, Data.a2], 'layout': 14},
        {'photos': [Data.a16, Data.a15], 'layout': 12},
        {'photos': [Data.a24], 'layout': 15},
        {'photos': [Data.a1, Data.a8], 'layout': 11},
        {'photos': [Data.a3, Data.a6, Data.a4], 'layout': 3},
        {'photos': [Data.a23], 'layout': 15},
        {'photos': [Data.a22, Data.a11], 'layout': 11},
        {'photos': [Data.a21, Data.a25], 'layout': 13}
    ],
    'berlin' : [
        {'photos': [Data.b12], 'layout': 16},
        {'photos': [Data.b19, Data.b20], 'layout': 11},
        {'photos': [Data.b2], 'layout': 15},
        {'photos': [Data.b9, Data.b7], 'layout': 13},
        {'photos': [Data.b8], 'layout': 16},
        {'photos': [Data.b1, Data.b3, Data.b5], 'layout': 2},
        {'photos': [Data.b11, Data.b10], 'layout': 13},
        {'photos': [Data.b4, Data.b6], 'layout': 17},
        {'photos': [Data.b17, Data.b16, Data.b14], 'layout': 4},
        {'photos': [Data.b15], 'layout': 16}
    ],
    'san francisco' : [
        {'photos': [Data.s2], 'layout': 15},
        {'photos': [Data.s5, Data.s6], 'layout': 12},
        {'photos': [Data.s1], 'layout': 16},
        {'photos': [Data.s7, Data.s3], 'layout': 11},
        {'photos': [Data.s10, Data.s11, Data.s8], 'layout': 9},
        {'photos': [Data.s12, Data.s13], 'layout': 14},
        {'photos': [Data.s14], 'layout': 16}
    ]
}

export default cards