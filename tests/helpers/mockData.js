// Sample data matching CollegeScope college document / API model
module.exports.mockColleges = [
  {
    id: '60d0fe4f5311236168a109ca',
    name: 'Chandigarh University',
    location: 'Mohali, Punjab',
    state: 'Punjab',
    district: 'Mohali',
    type: 'Private',
    nirfRank: 45,
    shortInfo: 'Leading private university in Punjab',
    fees: { tuition: 150000, hostel: 80000, tuitionPerYear: 150000, hostelPerYear: 80000 },
    placements: { avg: 7.5, median: 6.5, topOffers: 40 },
    facilities: ['Hostel', 'Library', 'Sports'],
    courses: []
  },
  {
    id: '60d0fe4f5311236168a109cb',
    name: 'Punjab Engineering College',
    location: 'Sector 12, Chandigarh',
    state: 'Chandigarh',
    district: 'Chandigarh',
    type: 'Gov',
    nirfRank: 82,
    shortInfo: 'Premier technical institution',
    fees: { tuition: 120000, hostel: 60000, tuitionPerYear: 120000, hostelPerYear: 60000 },
    placements: { avg: 9.0, median: 8.0, topOffers: 45 },
    facilities: ['Hostel', 'Library', 'Sports', 'Labs'],
    courses: []
  },
];
