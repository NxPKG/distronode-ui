// Autogenerated file. Please do not modify.

// If you want to modify fields to interface, create new one in the folder above and create interface with the same name.
// You can then add, modify or even delete existing interface fields. Delete is done with Omit, note however it returns new interface.
// Those autogenerated interfaces does not contains all types, some of them are unknown - those are candidates for custom modification.
// See readme in folder above for more information.

/* eslint-disable @typescript-eslint/no-empty-interface */

// A serializer for unpaginated CollectionVersion.
export interface UnpaginatedCollectionVersionResponse {
  version: string;

  // Get href.
  href: string;

  created_at: string;

  updated_at: string;

  requires_ansible: string;

  // Get a list of mark values filtering only those in the current repo.
  // marks				:	unknown;

  // artifact				:	unknown;

  // collection				:	unknown;

  // Get artifact download URL.
  download_url: string;

  name: string;

  // namespace				:	unknown;

  signatures: string;

  // metadata				:	unknown;

  // Get the git URL.
  git_url: string;

  // Get the git commit sha.
  git_commit_sha: string;
}
