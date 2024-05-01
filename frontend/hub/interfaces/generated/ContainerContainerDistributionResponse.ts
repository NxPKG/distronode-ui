// Autogenerated file. Please do not modify.

// If you want to modify fields to interface, create new one in the folder above and create interface with the same name.
// You can then add, modify or even delete existing interface fields. Delete is done with Omit, note however it returns new interface.
// Those autogenerated interfaces does not contains all types, some of them are unknown - those are candidates for custom modification.
// See readme in folder above for more information.

/* eslint-disable @typescript-eslint/no-empty-interface */

// URL of interface:
// /api/pulp/api/v3/distributions/container/container/{pulp_id}/

// A serializer for ContainerDistribution.
export interface ContainerContainerDistributionResponse {
  // The base (relative) path component of the published url. Avoid paths that                     overlap with other distribution base paths (e.g. "foo" and "foo/bar")
  base_path: string;

  // A unique name. Ex, `rawhide` and `stable`.
  name: string;

  // pulp_labels				:	unknown;

  // Whether this distribution should be shown in the content app.
  hidden: boolean;

  // The latest RepositoryVersion for this Repository will be served.
  repository: string;

  // Timestamp of creation.
  pulp_created: string;

  // An optional content-guard. If none is specified, a default one will be used.
  content_guard: string;

  pulp_href: string;

  // RepositoryVersion to be served
  repository_version: string;

  // The Registry hostname/name/ to use with docker pull command defined by this distribution.
  registry_path: string;

  // Namespace this distribution belongs to.
  namespace: string;

  // Restrict pull access to explicitly authorized users. Defaults to unrestricted pull access.
  private: boolean;

  // An optional description.
  description: string;
}
