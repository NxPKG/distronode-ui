// Autogenerated file. Please do not modify.

// If you want to modify fields to interface, create new one in the folder above and create interface with the same name.
// You can then add, modify or even delete existing interface fields. Delete is done with Omit, note however it returns new interface.
// Those autogenerated interfaces does not contains all types, some of them are unknown - those are candidates for custom modification.
// See readme in folder above for more information.

/* eslint-disable @typescript-eslint/no-empty-interface */

// Serializer for copying manifests from a source repository to a destination repository.
export interface ManifestCopy {
  // A URI of the repository to copy content from.
  source_repository: string;

  // A URI of the repository version to copy content from.
  source_repository_version: string;

  // A list of manifest digests to copy.
  // digests				:	unknown;

  // A list of media_types to copy.
  // media_types				:	unknown;
}
