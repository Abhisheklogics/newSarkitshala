let ComputerNetworkData=[
  {
  "mainTitle": "Network Topologies Explained: Star, Bus, Ring, and Mesh",
  "title": "Experiment on Network Topologies (Star, Bus, Ring, Mesh)",
  "ExperimentId": "CN001",
  "slug": "network-topologies-star-bus-ring-mesh",
  "metaDescription": "Understand different network topologies like Star, Bus, Ring, and Mesh. Learn their structures, advantages, disadvantages, and real-world applications in networking.",
  "title1": "Introduction",
  "para1": "In computer networking, a network topology refers to the physical or logical arrangement of nodes and connections in a network. Understanding different types of network topologies is essential for designing efficient and reliable network systems. This experiment focuses on the four primary network topologies: Star, Bus, Ring, and Mesh.",
  "title2": "Working Principle",
  "para2": "Each network topology defines how computers, printers, switches, and other devices are interconnected. The choice of topology affects network performance, scalability, and fault tolerance. In this experiment, we will observe the structure, data flow, and characteristics of each topology using diagrams and simulation (if applicable).",
  "workingSteps": [
    "Study the structure of each topology using diagrams.",
    "Understand the advantages and disadvantages of each type.",
    "Analyze scenarios where each topology is best suited.",
    "If possible, simulate simple connections using network simulation tools like Cisco Packet Tracer or GNS3."
  ],
  "formula": "",
  "title3": "Components Required",
  "components": [
    "Network cables (Ethernet)",
    "Switches or Hubs",
    "Computers or Virtual Machines",
    "Router (optional for simulation)",
    "Cisco Packet Tracer or GNS3 (optional software)"
  ],
  "title4": "Pin Configuration",
  "pinConfig": [
    {
      "component": "Ethernet Cable",
      "pins": "Uses RJ45 connector with 8-pin configuration"
    },
    {
      "component": "Switch",
      "pins": "Port-based; no specific pin usage required"
    }
  ],
  "note": "This is a theoretical and optionally simulated experiment. Hardware setup is minimal unless you are demonstrating in a lab.",
  "title5": "Wiring & Connections",
  "wiring": [
    {
      "topology": "Star",
      "description": "All devices are connected to a central switch or hub."
    },
    {
      "topology": "Bus",
      "description": "All devices are connected to a single communication line with terminators at both ends."
    },
    {
      "topology": "Ring",
      "description": "Each device is connected to two others, forming a ring for data to circulate."
    },
    {
      "topology": "Mesh",
      "description": "Each device is connected to every other device for maximum redundancy."
    }
  ],
  "title6": "Source Code",
  "code": "// No code required for this theoretical experiment. You may use simulation scripts or Packet Tracer configuration files.",
  "title7": "Code Explanation",
  "codeExplanation": "Since this experiment focuses on physical/logical topology design, there is no programming involved. For simulation, you can use drag-and-drop features of Cisco Packet Tracer or similar software.",
  "title8": "Applications",
  "applications": [
    "Star topology is used in most LAN environments like offices and homes.",
    "Bus topology was historically used in early Ethernet setups.",
    "Ring topology is used in some fiber-optic and Token Ring networks.",
    "Mesh topology is ideal for mission-critical networks like military communication or data centers."
  ],
  "title9": "Conclusion",
  "conclusion": "Understanding different network topologies is crucial for building robust and efficient network systems. Each topology offers distinct advantages and trade-offs in terms of cost, performance, and scalability. This experiment provides foundational knowledge that helps in real-world network design and architecture.",
  "faqs": [
    {
      "question": "Which network topology is most commonly used in modern LANs?",
      "answer": "Star topology is the most commonly used due to its simplicity, ease of management, and scalability."
    },
    {
      "question": "Why is Mesh topology not widely used in home networks?",
      "answer": "Mesh topology requires a large number of connections and is costly and complex to implement, making it unsuitable for typical home use."
    },
    {
      "question": "What happens if the central hub fails in a Star topology?",
      "answer": "If the central hub or switch fails in a Star topology, the entire network can go down since all nodes depend on it."
    },
    {
      "question": "Is Bus topology still relevant today?",
      "answer": "Bus topology is largely outdated and replaced by more efficient topologies like Star, but it can still be useful in small or temporary setups."
    },
    {
      "question": "Can we combine topologies in real-world networks?",
      "answer": "Yes, hybrid topologies that mix features of Star, Mesh, and others are often used in complex enterprise or campus networks."
    }
  ]
}
,
{
  "mainTitle": "Static & Dynamic IP Configuration with Subnetting",
  "title": "Experiment on Static and Dynamic IP Configuration with Subnetting",
  "ExperimentId": "CN002",
  "slug": "static-dynamic-ip-configuration-subnetting",
  "metaDescription": "Learn how to configure Static and Dynamic IP addresses along with subnetting. Understand IP classes, DHCP, subnet masks, and their practical applications in networking.",
  "title1": "Introduction",
  "para1": "IP addressing is fundamental to network communication. In this experiment, we explore two types of IP assignment methods—Static and Dynamic—and understand how subnetting is used to segment networks efficiently. This hands-on experiment helps you learn how to manually assign IP addresses or automate the process using DHCP, along with performing subnet calculations.",
  "title2": "Working Principle",
  "para2": "Static IP addressing requires manually assigning an IP to each device. It ensures consistency but requires more management. Dynamic IP addressing uses DHCP (Dynamic Host Configuration Protocol) to automatically assign IPs, ideal for large, changing networks. Subnetting divides a large IP network into smaller, manageable sub-networks by modifying the subnet mask.",
  "workingSteps": [
    "Check the current IP configuration using 'ipconfig' (Windows) or 'ifconfig' (Linux/Mac).",
    "Assign a static IP address manually in the OS network settings.",
    "Set up a DHCP server (e.g., on a router or using software) for dynamic IP allocation.",
    "Validate dynamic assignment by connecting devices and checking assigned IPs.",
    "Perform subnetting by calculating valid subnets from a given IP block.",
    "Verify subnet configurations using subnet calculators or manual binary division."
  ],
  "formula": "Number of Subnets = 2^n, where n = number of borrowed bits.\nNumber of Hosts = 2^h - 2, where h = number of host bits.",
  "title3": "Components Required",
  "components": [
    "Two or more computers (Windows/Linux)",
    "Router or DHCP server (software or hardware)",
    "Ethernet cables or Wi-Fi network",
    "Subnet calculator (optional)",
    "Operating System with admin access"
  ],
  "title4": "Pin Configuration",
  "pinConfig": [
    {
      "component": "Ethernet Cable (RJ45)",
      "pins": "8 wires (Twisted pair), typically using pins 1, 2, 3, and 6 for data transfer"
    }
  ],
  "note": "Ensure DHCP is enabled or disabled appropriately depending on whether you're testing dynamic or static configuration.",
  "title5": "Wiring & Connections",
  "wiring": [
    {
      "type": "Static IP",
      "description": "Assign IP manually through the network adapter settings (e.g., 192.168.1.10, subnet: 255.255.255.0, gateway: 192.168.1.1)"
    },
    {
      "type": "Dynamic IP",
      "description": "Connect to a router or DHCP server which automatically assigns IP (e.g., 192.168.1.101)"
    }
  ],
  "title6": "Source Code",
  "code": "// Sample: Check and assign IP (Linux command line)\n\n// View current IP configuration\n$ ifconfig\n\n// Assign static IP\n$ sudo ifconfig eth0 192.168.1.20 netmask 255.255.255.0\n\n// Set default gateway\n$ sudo route add default gw 192.168.1.1\n\n// Restart networking service (Ubuntu)\n$ sudo systemctl restart networking.service",
  "title7": "Code Explanation",
  "codeExplanation": "The above commands show how to configure a static IP in a Linux system. 'ifconfig' displays network info, 'route add' sets the default gateway, and restarting the networking service applies changes. For dynamic IP, no manual command is required if DHCP is enabled on the network.",
  "title8": "Applications",
  "applications": [
    "Static IPs are used for servers, printers, and devices requiring consistent access.",
    "Dynamic IPs are suitable for general client devices in large networks (e.g., schools, offices).",
    "Subnetting helps improve network performance and security in large-scale deployments.",
    "Used in setting up LANs, Internet service provisioning, and enterprise IT infrastructure."
  ],
  "title9": "Conclusion",
  "conclusion": "Understanding static and dynamic IP configuration is essential for any network administrator or enthusiast. Combined with subnetting, it provides the ability to build and manage scalable, structured, and secure networks. This experiment builds a strong foundation for real-world networking tasks.",
  "faqs": [
    {
      "question": "What is the main difference between static and dynamic IP?",
      "answer": "A static IP is manually assigned and remains fixed, while a dynamic IP is automatically assigned by a DHCP server and may change over time."
    },
    {
      "question": "Why is subnetting important in networking?",
      "answer": "Subnetting divides a large network into smaller sub-networks to enhance performance, improve management, and increase security."
    },
    {
      "question": "Can I mix static and dynamic IPs in one network?",
      "answer": "Yes, but ensure the static IPs are outside the DHCP range to avoid conflicts."
    },
    {
      "question": "How do I calculate subnet ranges manually?",
      "answer": "Convert IP and subnet mask to binary, perform bitwise AND to find the network address, and calculate range using the number of host bits."
    }
  ]
},
{
  "mainTitle": "VLAN Configuration and Inter-VLAN Routing Explained",
  "title": "Experiment on VLAN Configuration and Inter-VLAN Routing",
  "ExperimentId": "CN003",
  "slug": "vlan-configuration-inter-vlan-routing",
  "metaDescription": "Learn how to configure VLANs and enable Inter-VLAN routing using Layer 3 switches or routers. Understand VLAN benefits, trunk ports, and routing between different VLANs in a network.",
  "title1": "Introduction",
  "para1": "VLAN (Virtual Local Area Network) is a method of creating multiple distinct broadcast domains within a single switch, logically segmenting the network. Inter-VLAN routing enables communication between devices in different VLANs using a Layer 3 switch or a router. This experiment demonstrates how to configure VLANs, assign ports, and enable inter-VLAN routing in a simulated or physical network environment.",
  "title2": "Working Principle",
  "para2": "Each VLAN behaves as an independent network. By default, devices in one VLAN cannot communicate with devices in another VLAN. Inter-VLAN routing is required to bridge this communication gap, typically achieved using a router (Router-on-a-Stick) or a Layer 3 switch. VLAN tagging (802.1Q) is used on trunk ports to carry traffic from multiple VLANs over a single link.",
  "workingSteps": [
    "Access the switch configuration mode.",
    "Create multiple VLANs using VLAN IDs (e.g., VLAN 10, VLAN 20).",
    "Assign specific switch ports to the respective VLANs.",
    "Configure a trunk port to carry traffic from all VLANs to the router or Layer 3 switch.",
    "Set up sub-interfaces on the router (Router-on-a-Stick) or SVIs on a Layer 3 switch for each VLAN.",
    "Test communication between devices in the same and different VLANs."
  ],
  "formula": "",
  "title3": "Components Required",
  "components": [
    "Layer 2 or Layer 3 Switch (Cisco or simulation)",
    "Router (for Router-on-a-Stick)",
    "PCs or Virtual Machines",
    "Cisco Packet Tracer or GNS3 (for simulation)",
    "Ethernet cables"
  ],
  "title4": "Pin Configuration",
  "pinConfig": [
    {
      "component": "RJ45 Ethernet Cable",
      "pins": "Uses pins 1, 2, 3, and 6 for data communication in full duplex"
    }
  ],
  "note": "In simulation, use Packet Tracer or GNS3 to visualize VLANs and sub-interfaces effectively. In hardware, ensure switch/router supports required features.",
  "title5": "Wiring & Connections",
  "wiring": [
    {
      "connection": "Switch Port to PC",
      "description": "Assign PC to access port in VLAN 10 or 20"
    },
    {
      "connection": "Switch to Router",
      "description": "Connect via trunk port; configure sub-interfaces on router (e.g., Gig0/0.10, Gig0/0.20)"
    }
  ],
  "title6": "Source Code",
  "code": "// Switch Configuration\nSwitch> enable\nSwitch# configure terminal\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name HR\nSwitch(config-vlan)# exit\nSwitch(config)# vlan 20\nSwitch(config-vlan)# name Sales\nSwitch(config-vlan)# exit\nSwitch(config)# interface fastEthernet 0/1\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10\nSwitch(config)# interface fastEthernet 0/2\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 20\nSwitch(config)# interface fastEthernet 0/24\nSwitch(config-if)# switchport mode trunk\n\n// Router-on-a-Stick Configuration\nRouter> enable\nRouter# configure terminal\nRouter(config)# interface gig0/0.10\nRouter(config-subif)# encapsulation dot1Q 10\nRouter(config-subif)# ip address 192.168.10.1 255.255.255.0\nRouter(config)# interface gig0/0.20\nRouter(config-subif)# encapsulation dot1Q 20\nRouter(config-subif)# ip address 192.168.20.1 255.255.255.0\nRouter(config)# exit"
  ,
  "title7": "Code Explanation",
  "codeExplanation": "The switch configuration creates VLAN 10 and VLAN 20 and assigns ports accordingly. One port is set as trunk to carry traffic to the router. On the router, sub-interfaces are created with dot1Q encapsulation to handle tagged traffic. Each sub-interface is assigned an IP address acting as the default gateway for that VLAN.",
  "title8": "Applications",
  "applications": [
    "Segmenting networks in offices or colleges based on departments.",
    "Enhancing network security by isolating broadcast domains.",
    "Allowing controlled communication between departments (HR, Finance, Sales).",
    "Used in enterprise networks, data centers, and virtualized environments."
  ],
  "title9": "Conclusion",
  "conclusion": "VLANs improve network management and security by logically segmenting devices. However, for cross-VLAN communication, inter-VLAN routing is essential. This experiment demonstrates the entire process of VLAN setup and enabling communication across VLANs through Router-on-a-Stick or Layer 3 switching.",
  "faqs": [
    {
      "question": "What is a VLAN?",
      "answer": "A VLAN (Virtual Local Area Network) is a logical grouping of devices that behave as if they are on the same LAN, even if they are on different physical networks."
    },
    {
      "question": "Why do we need Inter-VLAN Routing?",
      "answer": "Because VLANs are isolated by default. To allow devices from different VLANs to communicate, inter-VLAN routing is required using a router or Layer 3 switch."
    },
    {
      "question": "What is the difference between trunk and access ports?",
      "answer": "Access ports carry traffic for one VLAN, while trunk ports carry traffic for multiple VLANs using VLAN tagging (802.1Q)."
    },
    {
      "question": "What is Router-on-a-Stick?",
      "answer": "Router-on-a-Stick is a method where a single physical interface on a router is used to route traffic between multiple VLANs by using sub-interfaces and 802.1Q encapsulation."
    },
    {
      "question": "Can I configure VLANs without a router?",
      "answer": "Yes, but devices in different VLANs won’t be able to communicate unless inter-VLAN routing is configured through a Layer 3 device."
    }
  ]
},
{
  "mainTitle": "RIP and OSPF Routing Protocol Implementation Explained",
  "title": "Experiment on RIP and OSPF Routing Protocol Configuration",
  "ExperimentId": "CN004",
  "slug": "rip-ospf-routing-protocol-implementation",
  "metaDescription": "Explore RIP and OSPF routing protocol configuration using Cisco routers. Learn their working, differences, and how to implement both using Cisco Packet Tracer or GNS3.",
  "title1": "Introduction",
  "para1": "Routing protocols are essential for dynamic communication between different networks. RIP (Routing Information Protocol) and OSPF (Open Shortest Path First) are two widely used interior gateway protocols. This experiment demonstrates the configuration of both RIP and OSPF using Cisco routers and explains their advantages, disadvantages, and real-world applications.",
  "title2": "Working Principle",
  "para2": "RIP is a distance-vector protocol that uses hop count as its routing metric. It updates the routing table every 30 seconds and supports a maximum of 15 hops. OSPF is a link-state protocol that uses Dijkstra's algorithm to compute the shortest path and provides faster convergence, better scalability, and hierarchical routing. Both protocols automatically share routing information to build and maintain routing tables.",
  "workingSteps": [
    "Set up a network topology with at least two routers and multiple PCs.",
    "Assign IP addresses to router interfaces and PCs.",
    "Enable RIP on all routers and configure the networks under RIP.",
    "Replace RIP with OSPF and configure OSPF with appropriate process ID and area.",
    "Test connectivity between all devices using ping commands.",
    "Compare the behavior and convergence time between RIP and OSPF."
  ],
  "formula": "RIP Metric = Number of hops\nOSPF Metric = Cost based on bandwidth (Cost = 100,000,000 / Interface Bandwidth in bps)",
  "title3": "Components Required",
  "components": [
    "2 or more Cisco routers (real or simulated)",
    "2 or more PCs or end devices",
    "Switches (optional)",
    "Cisco Packet Tracer or GNS3",
    "Ethernet cables"
  ],
  "title4": "Pin Configuration",
  "pinConfig": [
    {
      "component": "Router Interfaces",
      "pins": "Gig0/0 or FastEthernet0/0 used for connection; RJ45 standard applies"
    }
  ],
  "note": "Use Cisco Packet Tracer for beginners or GNS3 for real IOS emulation. Ensure interface IPs are in different subnets.",
  "title5": "Wiring & Connections",
  "wiring": [
    {
      "connection": "Router1 to Router2",
      "description": "Connect via GigabitEthernet or Serial cable depending on device"
    },
    {
      "connection": "Router to PC",
      "description": "Connect via switch or directly to Ethernet port"
    }
  ],
  "title6": "Source Code",
  "code": "// RIP Configuration on Router1\nRouter> enable\nRouter# configure terminal\nRouter(config)# interface gig0/0\nRouter(config-if)# ip address 192.168.1.1 255.255.255.0\nRouter(config-if)# no shutdown\nRouter(config)# router rip\nRouter(config-router)# version 2\nRouter(config-router)# network 192.168.1.0\nRouter(config-router)# network 10.0.0.0\n\n// OSPF Configuration on Router1\nRouter(config)# no router rip\nRouter(config)# router ospf 1\nRouter(config-router)# network 192.168.1.0 0.0.0.255 area 0\nRouter(config-router)# network 10.0.0.0 0.0.0.255 area 0",
  "title7": "Code Explanation",
  "codeExplanation": "In RIP configuration, we specify the routing protocol (RIP), version 2, and include networks to be advertised. In OSPF configuration, we first remove RIP, then enable OSPF with process ID 1 and assign networks with wildcard masks to OSPF area 0.",
  "title8": "Applications",
  "applications": [
    "RIP is used in small networks with simple routing needs.",
    "OSPF is widely used in enterprise and ISP networks for its speed and efficiency.",
    "Both protocols are essential in CCNA-level training and network certification.",
    "Used in dynamic routing configurations for routers in LANs and MANs."
  ],
  "title9": "Conclusion",
  "conclusion": "Both RIP and OSPF offer dynamic routing, but OSPF is more scalable and reliable. This experiment provides insight into configuring and analyzing these protocols, helping students understand how routers share routes and make decisions based on metrics.",
  "faqs": [
    {
      "question": "What is the difference between RIP and OSPF?",
      "answer": "RIP is a distance-vector protocol using hop count, suitable for small networks. OSPF is a link-state protocol using cost as metric and supports larger, hierarchical networks."
    },
    {
      "question": "Can I use both RIP and OSPF on the same router?",
      "answer": "Yes, but it's not recommended unless you have redistribution configured to share routes between protocols."
    },
    {
      "question": "Which routing protocol is faster?",
      "answer": "OSPF converges faster than RIP due to its use of link-state database and SPF algorithm."
    },
    {
      "question": "What is a wildcard mask in OSPF?",
      "answer": "A wildcard mask is used in OSPF to define a range of IP addresses. For example, 0.0.0.255 covers 256 addresses in a subnet."
    },
    {
      "question": "Is RIP still used in modern networks?",
      "answer": "RIP is rarely used in production today but is still taught for foundational learning in network courses."
    }
  ]
},
{
  "mainTitle": "DNS and DHCP Configuration Explained: A Practical Guide",
  "title": "Experiment on DNS and DHCP Configuration",
  "ExperimentId": "CN005",
  "slug": "dns-dhcp-configuration-experiment",
  "metaDescription": "Learn how to configure DNS and DHCP servers in a network. Understand how domain name resolution and dynamic IP assignment work using practical networking tools.",
  "title1": "Introduction",
  "para1": "DNS (Domain Name System) and DHCP (Dynamic Host Configuration Protocol) are core services in a networked environment. DHCP automatically assigns IP addresses to devices, while DNS resolves domain names into IP addresses. This experiment demonstrates how to configure both services on a server or router and test their functionality using client systems.",
  "title2": "Working Principle",
  "para2": "DHCP assigns dynamic IPs, subnet masks, gateways, and DNS server info to clients. It reduces manual errors and simplifies network management. DNS maps human-readable domain names (like google.com) to IP addresses. When a user enters a domain, a DNS query is sent to a DNS server which responds with the appropriate IP.",
  "workingSteps": [
    "Set up a basic network with at least one server and two clients.",
    "Install and configure DHCP server with IP ranges, subnet, and DNS info.",
    "Install and configure a DNS server with domain entries.",
    "Configure client devices to obtain IP and DNS automatically.",
    "Test DHCP by verifying IP assignment on clients.",
    "Test DNS resolution using ping or nslookup commands."
  ],
  "formula": "",
  "title3": "Components Required",
  "components": [
    "1 DHCP/DNS capable server (Windows/Linux)",
    "2 or more client PCs",
    "Switch or Router",
    "Cisco Packet Tracer (for simulation) or VirtualBox (for real setup)",
    "Ethernet cables"
  ],
  "title4": "Pin Configuration",
  "pinConfig": [
    {
      "component": "Ethernet Cable (RJ45)",
      "pins": "Uses pins 1, 2, 3, and 6 for Ethernet data transmission"
    }
  ],
  "note": "In simulations like Packet Tracer, you can use the 'Server' node and enable both DHCP and DNS services from GUI.",
  "title5": "Wiring & Connections",
  "wiring": [
    {
      "connection": "Server to Switch",
      "description": "Connect the DNS/DHCP server to the central switch"
    },
    {
      "connection": "Clients to Switch",
      "description": "All client devices connect to the same switch and receive IPs via DHCP"
    }
  ],
  "title6": "Source Code",
  "code": "// Linux DHCP Configuration (isc-dhcp-server)\n\n# Install DHCP server\n$ sudo apt install isc-dhcp-server\n\n# Edit config file\n$ sudo nano /etc/dhcp/dhcpd.conf\n\n# Sample Config\nsubnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.100 192.168.1.200;\n  option routers 192.168.1.1;\n  option domain-name-servers 192.168.1.10;\n  default-lease-time 600;\n  max-lease-time 7200;\n}\n\n// DNS Zone Setup (Bind9)\n$ sudo nano /etc/bind/named.conf.local\n\n# Sample Zone\nzone \"mydomain.local\" {\n  type master;\n  file \"/etc/bind/db.mydomain\";\n};\n\n// Sample zone file (/etc/bind/db.mydomain)\n$TTL 604800\n@   IN  SOA mydomain.local. admin.mydomain.local. (\n            2 ; Serial\n        604800 ; Refresh\n         86400 ; Retry\n       2419200 ; Expire\n        604800 ) ; Negative Cache TTL\n;\n@       IN  NS      mydomain.local.\n@       IN  A       192.168.1.10\nwww     IN  A       192.168.1.10",
  "title7": "Code Explanation",
  "codeExplanation": "The DHCP configuration specifies the IP range and DNS server to assign to clients. The DNS setup creates a local domain zone (mydomain.local) and resolves 'www' to the server's IP. This can be tested with a ping to www.mydomain.local from clients.",
  "title8": "Applications",
  "applications": [
    "Used in enterprise networks for automatic IP assignment and internal domain resolution.",
    "Helps reduce human errors in IP configuration and simplifies administration.",
    "DNS is essential for hosting websites, email servers, and services within a network.",
    "DHCP is used in homes, offices, data centers, and ISPs to manage IP addresses efficiently."
  ],
  "title9": "Conclusion",
  "conclusion": "Configuring DHCP and DNS servers is essential for building any dynamic, user-friendly network. DHCP reduces admin effort, while DNS allows users to access services using readable names. This experiment builds a strong foundation for managing core network services.",
  "faqs": [
    {
      "question": "What is the main difference between DHCP and DNS?",
      "answer": "DHCP assigns IP addresses automatically, while DNS resolves domain names to IP addresses."
    },
    {
      "question": "Can a single server handle both DHCP and DNS?",
      "answer": "Yes, many servers (like Windows Server or Linux with Bind & DHCPD) can host both services simultaneously."
    },
    {
      "question": "How can I check if a device received IP via DHCP?",
      "answer": "On Windows, use `ipconfig /all` and look for 'DHCP Enabled: Yes'. On Linux, use `nmcli` or `ifconfig`."
    },
    {
      "question": "What happens if DHCP server fails?",
      "answer": "Clients won’t receive new IPs. Existing leases may work for some time until they expire, after which communication breaks down."
    },
    {
      "question": "Can I use Google DNS with local DHCP?",
      "answer": "Yes, you can configure DHCP to assign 8.8.8.8 and 8.8.4.4 as DNS servers to clients."
    }
  ]
},
{
  "mainTitle": "Wireless Network Configuration with Security",
  "title": "Experiment on Wireless Network Setup and Securing Wi-Fi",
  "ExperimentId": "CN006",
  "slug": "wireless-network-configuration-security",
  "metaDescription": "Learn how to configure a secure wireless network with SSID, encryption (WPA2/WPA3), MAC filtering, and other wireless security practices using routers or access points.",
  "title1": "Introduction",
  "para1": "Wireless networking allows devices to connect to the internet or local network without physical cables. However, due to its open nature, it's crucial to configure it securely. In this experiment, we configure a wireless network, enable encryption, and apply security mechanisms like MAC filtering, SSID hiding, and firewall rules.",
  "title2": "Working Principle",
  "para2": "A wireless access point or router broadcasts an SSID that allows nearby devices to connect using Wi-Fi protocols. Security measures like WPA2/WPA3 encryption ensure only authorized users can access the network. Further security like MAC filtering and firewall rules add protection against unauthorized access or misuse.",
  "workingSteps": [
    "Connect to the wireless router’s admin panel using a web browser (typically 192.168.0.1 or 192.168.1.1).",
    "Set a unique SSID (network name) for identification.",
    "Choose WPA2 or WPA3 encryption and set a strong passphrase.",
    "Enable MAC address filtering and add allowed device MACs.",
    "Disable SSID broadcast if desired for additional obscurity.",
    "Test the configuration by connecting a device to the secured network."
  ],
  "formula": "",
  "title3": "Components Required",
  "components": [
    "Wireless router or access point",
    "Laptop/mobile phone for configuration/testing",
    "Ethernet cable (for initial configuration)",
    "Browser and network admin credentials"
  ],
  "title4": "Pin Configuration",
  "pinConfig": [
    {
      "component": "Ethernet (RJ45) for Initial Setup",
      "pins": "Pins 1, 2, 3, 6 used for data in 100Mbps Ethernet setup"
    }
  ],
  "note": "Many routers have a reset button to restore default settings if credentials are forgotten. Always change default passwords before deployment.",
  "title5": "Wiring & Connections",
  "wiring": [
    {
      "connection": "Router to Laptop (for setup)",
      "description": "Use RJ45 cable to connect laptop to router for first-time configuration"
    },
    {
      "connection": "Router to Internet (optional)",
      "description": "Connect router’s WAN port to ISP modem for internet access"
    }
  ],
  "title6": "Source Code",
  "code": "// Wireless Setup Steps (Web Interface)\n\n1. Access router IP via browser: http://192.168.1.1\n2. Login with admin credentials\n3. Navigate to Wireless > Basic Settings\n   - SSID: MySecureWiFi\n   - Mode: 802.11n or 802.11ac\n4. Go to Wireless > Security\n   - Security Mode: WPA2-PSK or WPA3\n   - Encryption: AES\n   - Passphrase: StrongPassword123!\n5. Enable MAC Filtering (optional):\n   - Add allowed MACs only\n6. (Optional) Disable SSID Broadcast\n7. Save & Reboot router",
  "title7": "Code Explanation",
  "codeExplanation": "The steps above describe configuring wireless settings via a router's web interface. WPA2-PSK and WPA3 provide strong encryption. MAC filtering restricts access to known devices. Disabling SSID broadcast can help obscure the network from casual discovery.",
  "title8": "Applications",
  "applications": [
    "Home and office Wi-Fi setup with secure access control.",
    "Educational institutions ensuring only students/staff connect.",
    "Public hotspots with layered security (e.g., captive portals + WPA).",
    "IoT device networks with MAC filtering to block rogue devices."
  ],
  "title9": "Conclusion",
  "conclusion": "Configuring a secure wireless network is vital for protecting user data and preventing unauthorized access. Using encryption, access control, and strong authentication ensures a stable and protected network environment. This experiment teaches best practices every network admin should know.",
  "faqs": [
    {
      "question": "What is WPA2/WPA3 encryption?",
      "answer": "WPA2 and WPA3 are wireless encryption standards that protect data sent over Wi-Fi from eavesdropping and unauthorized access. WPA3 is the latest and most secure standard."
    },
    {
      "question": "Should I disable SSID broadcast?",
      "answer": "Disabling SSID broadcast hides the network name from the public, adding a layer of obscurity, but it is not a primary security measure."
    },
    {
      "question": "What is MAC filtering?",
      "answer": "MAC filtering allows only approved device MAC addresses to connect to the wireless network, adding a layer of access control."
    },
    {
      "question": "How strong should my Wi-Fi password be?",
      "answer": "Use a password with at least 12 characters, combining uppercase, lowercase, numbers, and symbols. Avoid dictionary words or names."
    },
    {
      "question": "Is it okay to keep using default admin credentials?",
      "answer": "No. Default credentials are publicly known and pose a huge risk. Always change admin username and password."
    }
  ]
}


]

export default ComputerNetworkData