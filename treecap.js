import { world } from "@minecraft/server";

world.events.blockBreak.subscribe({block, brokenBlockPermutation, player}) => 
{
	// Investigate if we can use hasTags to get all logs.
	// See for hasTag use: https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockpermutation
	// Should we actually have to maintain an ever growing list...
	// Block Type should pull from an easy to add to list. Make block type check into a function that uses a switch to check log types.
	if(player.isSneaking && brokenBlockPermutation.BlockType == "minecraft:oak_log")
	{
		// Do breadth first search for logs of same type.
		// This will give us a list of logs at x,y,z coordinates.
		// We can then follow what the original tree capitator did and destroy all leaves within radius 3 of a log.
		// Break those blocks with a "world.getDimension("overworld").runCommandAsync("setblock x y z air 0 destroy")" (This command sets a block at xyz to air and destroys it as if it were a player.) We could also look into the fill command. 
	}
}
