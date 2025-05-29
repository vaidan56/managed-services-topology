import TopologyMap from '@/components/topology-map';

export default function TopologyMapPage() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* <h1 className="text-2xl font-bold p-4 flex-shrink-0 z-10 bg-bg">Environment Topology Map</h1> */}
      <div className="flex-1 min-h-0">
        <TopologyMap />
      </div>
    </div>
  );
}