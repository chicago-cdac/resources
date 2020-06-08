export default [ //https://encore-data.s3.us-east-2.amazonaws.com/index.html
  {
    id: 1,
    title: 'Encore',
    keywords: 'censorship, measurement, encore, computer networks',
    formats: 'csv, psql',
    shortdesc: 'Measure Web filtering from Web browsers',
    compressedsize: '350MB',
    uncompressedsize: '5.8GB',
    datestart: '01-2014',
    dateend: '11-2019',
    dateapprox: true,
    images: ['https://cdac-misc.s3.us-east-2.amazonaws.com/images/encore.png'],
    sampledataurl: 'https://encore-data.s3.us-east-2.amazonaws.com/index.html',
    contact: 'Nick Feamster',
    description: 'Encore: Lightweight Measurement of Web Censorship with Cross-Origin Requests',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "https://github.com/noise-lab/encore",
          metatags_enable: true,
          metatags_url: "https://github.com/noise-lab/encore",
          metatags_title: "GitHub - noise-lab/encore: Measure Web filtering from Web browsers.",
          metatags_description: "Measure Web filtering from Web browsers. Contribute to noise-lab/encore development by creating an account on GitHub.",
          metatags_image: "https://avatars3.githubusercontent.com/u/5245387?s=400&v=4",
        }
      ],
      secondary : [
        {
          type: "Publication",
          title : 'Encore: Lightweight Measurement of Web Censorship with Cross-Origin Requests',
          authors : 'S. Burnett, N. Feamster',
          publisher : 'ACM SIGCOMM 2015',
          locdate : 'London, UK, 2015.',
          url: 'https://conferences.sigcomm.org/sigcomm/2015/pdf/papers/p653.pdf',
          metatags_enable: false,
        },
        {
          type: "Video",
          title: "Encore: Lightweight Measurement of Web Censorship with Cross-Origin Requests",
          description: "SIGCOMM 2015 Presentation",
          url: "https://www.youtube.com/watch?v=cMUTU0OrOAc",
          metatags_enable: true,
          metatags_url: "https://www.youtube.com/watch?v=cMUTU0OrOAc",
          metatags_title: "Encore: Lightweight Measurement of Web Censorship with Cross-Origin Requests",
          metatags_description: "SIGCOMM 2015 Presentation",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/encore.png"
        },
        {
          type: "Alternative Data Location (UChicago)",
          title: "Encore Dataset",
          description: "Last Snapshot CSV data extracted from PSQL",
          url: "(parkscluster).cs.uchicago.edu:/data/encore/encoredbcsv.Nov2019.tgz",
          metatags_enable: false,
        },
        {
          type: "Alternative Data Location (UChicago)",
          title: "Encore Notebooks",
          description: "Last Snapshot CSV data extracted from PSQL",
          url: "(parkscluster).cs.uchicago.edu:/data/encore/encore-analysis.tgz",
          metatags_enable: false,
        },
        {
          type: "Media Coverage",
          title: "Media Coverage",
          description: "No Encore for Encore? Ethical questions for web-based censorship measurement",
          url: "https://techscience.org/a/2015121501/",
          image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/encore.png",
          metatags_enable: false,
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Project BISmark',
    keywords: 'speedtest, throughput, broadband, performance, bismark, computer networks',
    formats: 'csv, psql',
    shortdesc: 'Broadband Internet Service Benchmark Dataset Collection',
    compressedsize: '8GB',
    uncompressedsize: 'Unknown',
    datestart: '01-2006',
    dateend: '12-2019',
    dateapprox: true,
    images: ['http://projectbismark.net.s3-website.us-east-2.amazonaws.com/poster20191017.jpg'],
    sampledataurl: 'http://projectbismark.net.s3-website.us-east-2.amazonaws.com/csv/samples/',
    contact: 'Nick Feamster',
    description: 'Longitudinal internet performance data collected from broadband users (volunteers), mostly located in US. Measurements are extracted from the output of standard linux tools (eg. netperf, iperf, ping, traceroute, scamper and dtg) running on dedicated programmable routers (OpenWRT) and Single Board Computers (SBC).',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "http://projectbismark.net.s3-website.us-east-2.amazonaws.com/",
          metatags_enable: true,
          metatags_url: "http://projectbismark.net.s3-website.us-east-2.amazonaws.com/",
          metatags_title: "Broadband Internet Service Benchmark",
          metatags_description: "Project BISmark is an open source, open data, neutral platform for active internet performance monitoring",
          metatags_image: "http://projectbismark.net.s3-website.us-east-2.amazonaws.com/poster20191017.jpg",
        }
      ],
      secondary: [
        {
          type: "General Documention and Guidelines",
          url: "https://github.com/projectbismark",
          metatags_enable: true,
          metatags_url: "https://github.com/projectbismark",
          metatags_title: "projectbismark · GitHub",
          metatags_description: "Projectbismark has 21 repositories available. Follow their code on GitHub.",
          metatags_image: "https://avatars0.githubusercontent.com/u/1072883?s=280&v=4",
        },
        {
          type: "Alternative Data Location (UChicago)",
          title: "MySpeedTest Dataset",
          description: "MySpeedTest Android App Dataset",
          url: "(parkscluster).cs.uchicago.edu:/data/myspeedtest",
          metatags_enable: false,
        },
        {
          type: "Alternative Data Location (UChicago)",
          title: "MySpeedTest Dataset",
          description: "MySpeedTest Android App Source Code",
          url: "https://github.com/noise-lab/MySpeedTest",
          metatags_enable: true,
          metatags_url: "https://github.com/noise-lab/MySpeedTest",
          metatags_title: "GitHub - noise-lab/MySpeedTest",
          metatags_description: "Contribute to noise-lab/MySpeedTest development by creating an account on GitHub.",
          metatags_image: "https://avatars3.githubusercontent.com/u/5245387?s=400&v=4"
        },
        {
          type: "Media Coverage",
          title: "Homepage | CDAC",
          description: "Measuring the Effects of the COVID-19 Pandemic on Broadband Access Networks to Inform Robust Network Design | CDAC",
          url: "https://cdac.uchicago.edu/broadband",
          image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/CDAC_Logo_RGB_v01Full.svg",
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'BISmark: A Testbed for Deploying Measurements and Applications in Broadband Access Networks',
          authors : 'S. Sundaresan, S. Burnett, N. Feamster, W. de Donato',
          publisher : 'USENIX Annual Technical Conference',
          locdate : 'Philadelphia, Pennsylvania, USA. June 2014',
          url: 'https://www.usenix.org/system/files/conference/atc14/atc14-paper-sundaresan.pdf',
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'Measuring Home Broadband Performance',
          authors : 'S. Sundaresan, W. de Donato, N. Feamster, R. Teixeira, S. Crawford, A. Pescape',
          publisher : 'Volume 55, Issue 55, Communications of the ACM',
          locdate : 'November 2012',
          url: 'http://hal.upmc.fr/docs/00/83/50/36/PDF/paper.pdf',
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'Peering at the Internet\'s Frontier: A First Look at ISP Interconnectivity in Africa',
          authors : 'A. Gupta, M. Calder, N. Feamster, M. Chetty, E. Calandro, E. Katz-Bassett',
          publisher : 'Passive and Active Measurement Conference',
          locdate : 'Los Angeles, California, USA. March 2014',
          url: 'http://link.springer.com/chapter/10.1007%2F978-3-319-04918-2_20',
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'Measuring Broadband Performance in South Africa',
          authors : 'M. Chetty, S. Sundaresan, S. Muckaden, N. Feamster, Enrico Calandro',
          publisher : 'ACM DEV',
          locdate : 'Cape Town, South Africa. December 2013',
          url: 'http://www1.icsi.berkeley.edu/~srikanth/docs/broadband-sa-dev4.pdf',
          metatags_enable: false,
        },
        {
          type: "Related Datasets",
          url: "https://broadbandmap.fcc.gov/#/data-download",
          metatags_enable: true,
          metatags_url: "https://broadbandmap.fcc.gov/#/data-download",
          metatags_title: "Fixed Broadband Deployment Data",
          metatags_description: "Fixed Broadband Deployment Data (Main Download Page)",
          metatags_image: "https://www.fcc.gov/sites/default/files/social-media-sharing-fcc-logo.jpg",
        },
        {
          type: "Related Datasets",
          url: "https://opendata.fcc.gov/Wireline/Fixed-Broadband-Deployment-Data-Jun-2019-Status-V1/sgz3-kiqt",
          metatags_enable: true,
          metatags_url: "https://opendata.fcc.gov/Wireline/Fixed-Broadband-Deployment-Data-Jun-2019-Status-V1/sgz3-kiqt",
          metatags_title: "Fixed Broadband Deployment Data (Wireline)",
          metatags_description: "Fixed Broadband Deployment Data: Jun, 2019 Status V1",
          metatags_image: "https://www.fcc.gov/sites/default/files/social-media-sharing-fcc-logo.jpg",
        },
      ]
    },
  },
  {
    id: 3,
    title: 'IoT Inspector',
    keywords: 'iot, internet of things, privacy, security, computer networks',
    formats: 'json, pickle',
    shortdesc: 'An open-source tool that helps you learn more about your IoT devices',
    compressedsize: '6TB',
    uncompressedsize: 'Unknown',
    datestart: '01-2016',
    dateend: 'Current',
    dateapprox: true,
    images: ['https://lh3.googleusercontent.com/xPyyR00HSmmGBjK7r96Ng-4eh3nnh6o7t11ruFBYALB8EMsNbAdJYhSNedwNjzGM07bUAbIlWGMI8Hnd-pFIeg=w800'],
    sampledataurl: 'https://github.com/noise-lab/iot-inspector-server-v2/wiki/Data-Access-and-Schema',
    contact: 'Danny Y. Huang, Nick Feamster',
    description: 'An open-source desktop tool with a one-click install process. Automatically discovers IoT devices and analyzes their network traffic. Helps you identify security and privacy issues with graphs and tables. Requires minimal technical skills and no special hardware. Use it to quickly inspect devices (e.g., from your computer) or continuously monitor your network (e.g., from a Raspberry Pi)',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "https://iotinspector.org",
          metatags_enable: true,
          metatags_url: "https://iotinspector.org",
          metatags_title: "Our smart devices are watching us.",
          metatags_description: "An open-source desktop tool with a one-click install process",
          metatags_image: "https://lh3.googleusercontent.com/xPyyR00HSmmGBjK7r96Ng-4eh3nnh6o7t11ruFBYALB8EMsNbAdJYhSNedwNjzGM07bUAbIlWGMI8Hnd-pFIeg=w800",
        }
      ],
      secondary : [
        {
          type: "Media Coverage",
          title: "Media Coverage",
          url: "https://www.sciencefriday.com/segments/smart-tv-roku-spying/",
          metatags_enable: true,
          metatags_url: "https://www.sciencefriday.com/segments/smart-tv-roku-spying/",
          metatags_title: "Your Smart TV Is Watching You",
          metatags_description: "Smart TVs join the ranks of websites and smartphone apps that collect and share your data.",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/girl-smart-tv-min.jpg"
        },
        {
          type: "Media Coverage",
          title: "Media Coverage",
          url: "https://www.washingtonpost.com/technology/2019/09/18/you-watch-tv-your-tv-watches-back/",
          metatags_enable: true,
          metatags_url: "https://www.washingtonpost.com/technology/2019/09/18/you-watch-tv-your-tv-watches-back/",
          metatags_title: "Smart TVs like Samsung, LG and Roku are tracking everything we watch - The Washington Post",
          metatags_description: "In our latest privacy experiment, we tracked how four of the most popular TV brands record everything we watch.",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/YWZU2ZGZN4I6TJUIGA3JH62LBM.jpg"
        },
        {
          type: "Video",
          title: "How to download, install, run, and use IoT Inspector",
          description: "an open-source tool that helps you learn more about your IoT devices with one-click install",
          url: "https://www.youtube.com/watch?v=KaU80DpsaBw",
          metatags_enable: true,
          metatags_url: "https://www.youtube.com/watch?v=KaU80DpsaBw",
          metatags_title: "How to download, install, run, and use IoT Inspector",
          metatags_description: "an open-source tool that helps you learn more about your IoT devices with one-click install",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/iotinspector_yt.jpg"
        },
        {
          type: "Alternative Data Location (UChicago)",
          title: "Northeastern University IoT Study",
          description: "TBD",
          url: "(parkscluster).cs.uchicago.edu:/data/iot/northeastern-iot/iot-data.tgz",
          metatags_enable: false,
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Network Microscope',
    keywords: 'video, applications, performance, inference, machine learning, netmicroscope, computer networks',
    formats: 'json, pickle',
    shortdesc: 'Real-time inference of Quality of Experience with video streaming',
    compressedsize: '140GB',
    uncompressedsize: 'Unknown',
    datestart: '01-2016',
    dateend: '08-2018',
    dateapprox: true,
    images: ['https://netmicroscope.com/images/nmcharts.png'],
    sampledataurl: 'https://nm-public-data.s3.us-east-2.amazonaws.com/dataset/all_traffic_time_10.pkl',
    contact: 'Prof. Nick Feamster',
    description: 'Dataset collection on passive network monitoring of Over-The-Top internet applications such as Netflix, Youtube and Facebook.',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "https://netmicroscope.com/",
          metatags_enable: true,
          metatags_url: "https://netmicroscope.com/",
          metatags_title: "Real-time inference of Quality of Experience with video streaming",
          metatags_description: "Dataset collection on passive network monitoring of over-the-top internet applications such as Netflix, Youtube and Facebook.",
          metatags_image: "https://netmicroscope.com/images/nmcharts.png",
        }
      ],
      secondary : [
        {
          type: "Publication",
          title : 'Inferring Streaming Video Quality from Encrypted Traffic: Practical Models and Deployment Experience',
          authors : 'F. Bronzino*, P. Schmitt*, S.Ayoubi, G. Martins, R. Teixeira, N. Feamster (*Co-First Authors)',
          publisher : 'Proceedings of the ACM on Measurement and Analysis of Computing Systems (POMACS) and at ACM Sigmetrics',
          locdate : 'Boston, USA June 8-12, 2020',
          url: 'https://netmicroscope.com/papers/paper_cr.pdf',
          metatags_enable: false,
        },
        {
          type: "Source Code",
          url: "https://github.com/inria-muse/video_collection",
          metatags_enable: true,
          metatags_url: "https://github.com/inria-muse/video_collection",
          metatags_title: "GitHub - inria-muse/video_collection: Tools used to collected video session data (with ground truth) for a number of service",
          metatags_description: "Tools used to collected video session data (with ground truth) for a number of service - inria-muse/video_collection.",
          metatags_image: "https://avatars1.githubusercontent.com/u/10745014?s=400&v=4",
        },
        {
          type: "Video",
          title: "Youtube / Facebook / Netflix / SpeedTest Network Traffic Monitoring",
          description: "Network Traffic Real-Time Monitoring",
          url: "https://www.youtube.com/watch?v=ix5GTHW4D3U",
          metatags_enable: true,
          metatags_url: "https://www.youtube.com/watch?v=ix5GTHW4D3U",
          metatags_title: "Youtube / Facebook / Netflix / SpeedTest Network Traffic Monitoring",
          metatags_description: "Network Traffic Real-Time Monitoring",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/netmicroscope_yt.png"
        },
        {
          type: "Media Coverage",
          description: "WSJ testing shows typical U.S. households don’t use most of their bandwidth while streaming and get marginal gains from upgrading speeds",
          url: "https://www.wsj.com/graphics/faster-internet-not-worth-it/",
          metatags_enable: true,
          metatags_url: "https://www.wsj.com/graphics/faster-internet-not-worth-it/",
          metatags_title: "The Truth About Faster Internet: It’s Not Worth It",
          metatags_description: "WSJ testing shows typical U.S. households don’t use most of their bandwidth while streaming and get marginal gains from upgrading speeds",
          metatags_image: "https://si.wsj.net/public/resources/images/OG-DB403_201908_SOC_20190815130245.png",
        },
        {
          type: "Media Coverage",
          title: "Media Coverage",
          url: "https://www.forbes.com/sites/roslynlayton/2019/08/31/the-agenda-behind-the-wsjs-truth-about-broadband-series/",
          metatags_enable: true,
          metatags_url: "https://www.forbes.com/sites/roslynlayton/2019/08/31/the-agenda-behind-the-wsjs-truth-about-broadband-series/",
          metatags_title: "What's Driving The WSJ’s “Truth About Broadband” Series",
          metatags_description: "There is nothing like media sensation to drive a preferred policy outcome when mainstream regulatory analysis can't.",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/vcmJlcy1sb2dvLWRhcmsucG5n.png"
        },
        {
          type: "Data Location (UChicago)",
          title: "Video Quality of Experience Survey",
          description: "QoE opinion score about sampled video sessions.",
          url: "(parkscluster).cs.uchicago.edu/data/netmicroscope/vqoesurvey.csv",
          image: 'https://cdac-misc.s3.us-east-2.amazonaws.com/images/surveywordcloud.png',
          metatags_enable: false,
        },
        {
          type: "Data Location (UChicago)",
          title: "Video QoE .pcap Training Dataset",
          description: "Dataset of captured video sessions from applications such as Netflix, Facebook, Amazon and Youtube.",
          url: "(parkscluster).cs.uchicago.edu/data/netmicroscope/video_pcaps",
          image: 'https://netmicroscope.com/images/nmcharts.png',
          metatags_enable: false,
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Interconnection Measurement Project',
    keywords: 'isp, interconnection, performance, internet, network congestion, computer networks',
    formats: 'RData',
    shortdesc: 'Revealing Utilization at Internet Interconnection Points',
    compressedsize: '6GB',
    uncompressedsize: 'Unknown',
    datestart: '09-2015',
    dateend: '03-2017',
    dateapprox: true,
    images: ['http://interconnection.citp.princeton.edu/wp-content/uploads/2016/01/01agg-01_p_easy_natamonth_2017-03-31_1100x484.png'],
    sampledataurl: 'http://interconnection.citp.princeton.edu/wp-content/uploads/2017/07/Interconnect_Measurement_Proj_2017-03-31.xlsx',
    contact: 'Nick Feamster',
    description: 'Participating Internet Service Providers have installed a common tool to measure traffic at their interconnects, the points where ISPs exchange traffic with the greater Internet. All data and visualizations are of ingress capacity and utilization.',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "http://interconnection.citp.princeton.edu/",
          metatags_enable: true,
          metatags_url: "http://interconnection.citp.princeton.edu/",
          metatags_title: "Interconnection Measurement Project",
          metatags_description: "Participating Internet Service Providers have installed a common tool to measure traffic at their interconnects, the points where ISPs exchange traffic with the greater Internet. All data and visualizations are of ingress capacity and utilization.",
          metatags_image: "http://interconnection.citp.princeton.edu/wp-content/uploads/2016/01/01agg-01_p_easy_natamonth_2017-03-31_1100x484.png",
        }
      ],
      secondary : [
        {
          type: "Publication",
          title : 'Revealing Utilization at Internet Interconnection Points',
          authors : 'Nick Feamster',
          publisher : 'arxiv.org',
          locdate : 'Princeton University, USA, 2016',
          url: 'http://interconnection.citp.princeton.edu/wp-content/uploads/2016/04/1603.03656v1_IMP-Working-Paper.pdf',
          metatags_enable: false,
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Realtime Diagnostics App',
    keywords: 'hci, human computer integration, health, diagnostics',
    formats: 'json',
    shortdesc: 'Realtime Diagnostics for Nigerian Doctors Without Relying on Internet',
    compressedsize: 'Unknown',
    uncompressedsize: 'Unknown',
    datestart: '10-2019',
    dateend: 'Current',
    dateapprox: false,
    images: ['https://repository-images.githubusercontent.com/191812811/7bbc4600-b243-11e9-921b-349ad170f4aa'],
    sampledataurl: 'Not Yet Available',
    contact: 'Andrey Rzhetsky, Pedro Lopes',
    description: 'Realtime Diagnostics for Nigerian Doctors Without Relying on Internet - humancomputerintegration/realtime-diagnostics-app',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "https://github.com/humancomputerintegration/realtime-diagnostics-app",
          metatags_enable: true,
          metatags_url: "https://github.com/humancomputerintegration/realtime-diagnostics-app",
          metatags_title: "Github - Realtime Diagnostics Android Application",
          metatags_description: "Realtime Diagnostics for Nigerian Doctors Without Relying on Internet - humancomputerintegration/realtime-diagnostics-app",
          metatags_image: "https://cdac-misc.s3.us-east-2.amazonaws.com/images/realtimediag.png",
        }
      ],
      secondary : [
        {
          type: "Media Coverage",
          title: "Media Coverage",
          url: "https://cdac.uchicago.edu/research/a-mobile-decision-making-interface-for-doctors-without-internet/",
          metatags_enable: true,
          metatags_url: "https://cdac.uchicago.edu/research/a-mobile-decision-making-interface-for-doctors-without-internet/",
          metatags_title: "Mobile Decision-Making for Doctors Without Internet | CDAC",
          metatags_description: "Create a mobile Android app for physicians working in areas with poor internet coverage, enabling data-driven medical diagnosis and medical record access in the field.",
          metatags_image: "https://cdac.uchicago.edu/wp-content/uploads/2019/09/medical-app.jpg"
        },
      ]
    }
  }
]
