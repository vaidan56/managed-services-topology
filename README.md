# CyberArk Managed Services Topology Platform

A comprehensive platform for CyberArk managed services with interactive topology mapping, smart connection dialogs, and advanced multi-selection features.

## 🚀 Features

### Topology Mapping
- **Interactive Network Topology**: Drag-and-drop visual topology designer
- **Smart Connection Dialog**: Advanced edge creation with protocol selection, port configuration, and encryption status
- **Multi-Selection Support**: Cmd/Ctrl+drag for selecting multiple nodes and edges
- **Auto-Layout**: Intelligent automatic layout algorithm
- **Zone Management**: Network zone overlays with visual boundaries
- **Real-time Updates**: Live topology updates with proper state management

### Security & Authentication
- **Supabase Authentication**: Secure user authentication and session management
- **Route Protection**: Automatic redirect to login for unauthenticated users
- **Role-based Access**: Configurable access controls

### UI/UX
- **Modern Design**: Clean, responsive interface with dark/light theme support
- **Responsive Layout**: Works across desktop and mobile devices
- **Advanced Sidebar**: Collapsible sidebar with component palette
- **Real-time Feedback**: Visual feedback for all user interactions

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with Radix UI components
- **Flow Library**: @xyflow/react for interactive diagrams
- **State Management**: Zustand for global state
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaidan56/managed-services-topology.git
   cd managed-services-topology
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
├── app/                          # Next.js app router
│   ├── layout.tsx               # Root layout
│   ├── ClientLayout.tsx         # Client-side layout with auth
│   ├── dashboard/               # Dashboard pages
│   ├── topology-map/            # Topology mapping page
│   └── login/                   # Authentication pages
├── components/                   # React components
│   ├── topology/                # Topology-specific components
│   │   ├── nodes/              # Node components (servers, zones)
│   │   ├── sidebar/            # Topology sidebar & palette
│   │   └── dialogs/            # Smart dialogs (connections, properties)
│   ├── ui/                     # Reusable UI components
│   └── topology-map-refactored.tsx  # Main topology component
├── hooks/                       # Custom React hooks
├── lib/                        # Utility libraries
├── types/                      # TypeScript type definitions
├── constants/                  # App constants and styles
└── utils/                      # Helper functions
```

## 🎯 Key Components

### Topology Map Features
- **Server Components**: Draggable server nodes with status indicators
- **Network Zones**: Visual network boundaries with auto-detection
- **Smart Connections**: Advanced edge creation with protocol selection
- **Multi-Selection**: Select multiple elements with Cmd/Ctrl+drag
- **Properties Dialog**: Detailed node configuration
- **Auto-Layout**: Intelligent node positioning

### Authentication System
- **Protected Routes**: Automatic authentication checks
- **Session Management**: Persistent login state
- **Secure Redirects**: Proper handling of unauthorized access

## 🔧 Development

### Key Features Implemented
1. **Enhanced Drop Positioning**: Accurate node placement during drag-and-drop
2. **Z-Index Management**: Proper layering with zones always behind nodes
3. **Multi-Selection**: Keyboard shortcuts for selecting multiple elements
4. **Smart Connection Dialog**: Replace prompt() with rich UI for edge creation
5. **Authentication Guards**: Secure route protection
6. **Responsive Design**: Mobile-friendly interface

### Recent Improvements
- Fixed drag-and-drop positioning accuracy
- Implemented multi-node selection with Cmd/Ctrl+drag
- Added smart connection dialog with protocol selection
- Enhanced z-index layering for proper visual hierarchy
- Added authentication guards for security
- Improved responsive design for cross-device compatibility

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Vercel Deployment
```bash
npm run build
vercel deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. Unauthorized copying, modification, or distribution is prohibited.

## 🔗 Links

- [Live Demo](https://managed-services-topology.vercel.app) (if deployed)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Flow Documentation](https://reactflow.dev)

---

Built with ❤️ for CyberArk managed services