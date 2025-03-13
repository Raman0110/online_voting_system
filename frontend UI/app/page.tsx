"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";

export default function ElectionCard() {
  const [showDetails, setShowDetails] = useState(false);

  // Sample data for election candidates
  const election = {
    name: "Local Level Election",
    location: "Kathmandu, Nepal",
    date: "2025-03-15",
    candidates: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Mike Johnson" },
    ],
  };
  const { state } = useSidebar();

  const electionNow = {
    name: "Local Level Election",
    location: "Kathmandu, Nepal",
    date: "2025-03-15",
    totalVotes: 12500,
    candidates: [
      { id: 1, name: "John Doe", votes: 4500 },
      { id: 2, name: "Jane Smith", votes: 4200 },
      { id: 3, name: "Mike Johnson", votes: 3500 },
      { id: 4, name: "Alice Brown", votes: 2800 },
      { id: 5, name: "Robert White", votes: 2100 },
    ],
  };

  // Sort candidates by votes in descending order
  const sortedCandidates = [...electionNow.candidates].sort((a, b) => b.votes - a.votes);

  // Get the top 3 candidates
  const topThreeCandidates = sortedCandidates.slice(0, 3);

  return (
    <>
      {/* Ongoing Election */}
      <h1 className="text-center pb-6 text-2xl">Ongoing Elections</h1>
      <div className={`mx-auto flex gap-4 justify-center ${state === "expanded" ? 'w-[80vw]' : 'w-[100vw]'} `}>
        <Card className="w-[350px] border border-[#3E7ADC] rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>{electionNow.name}</CardTitle>
            <p className="text-sm text-gray-600">{electionNow.location} | {electionNow.date}</p>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Total Votes: {electionNow.totalVotes}</p>

            <h2 className="text-lg font-semibold mt-4">Leading Candidates:</h2>
            <ul className="space-y-2">
              {topThreeCandidates.map((candidate, index) => (
                <li key={candidate.id} className="text-sm">
                  {index + 1}. {candidate.name} - {candidate.votes} votes
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>View Details</Button>
          </CardFooter>
        </Card>

      </div>

      {/* Upcomming Election */}
      <h1 className="text-center py-8 text-2xl">Upcomming Elections</h1>
      <div className={`mx-auto flex gap-4 justify-center ${state === "expanded" ? 'w-[80vw]' : 'w-[100vw]'} `}>
        <Card className="w-[350px] border border-[#3E7ADC] rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>{election.name}</CardTitle>
            <CardDescription>
              {election.location} | {election.date}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {showDetails ? (
              <div>
                <h2 className="text-lg font-semibold mb-2">Candidates:</h2>
                <ul className="space-y-2">
                  {election.candidates.map((candidate) => (
                    <li key={candidate.id} className="text-sm">{candidate.name}</li>
                  ))}
                </ul>
              </div>
            ) : ""}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Hide Details" : "View Details"}
            </Button>
          </CardFooter>
        </Card>

      </div>
    </>
  );
}
