// Autogenerated file. Please do not modify.

// If you want to modify fields to interface, create new one in the folder above and create interface with the same name.
// You can then add, modify or even delete existing interface fields. Delete is done with Omit, note however it returns new interface.
// Those autogenerated interfaces does not contains all types, some of them are unknown - those are candidates for custom modification.
// See readme in folder above for more information.

/* eslint-disable @typescript-eslint/no-empty-interface */

/*
Base serializer for use with :class:`pulpcore.app.models.Model`

This ensures that all Serializers provide values for the 'pulp_href` field.

The class provides a default for the ``ref_name`` attribute in the
ModelSerializers's ``Meta`` class. This ensures that the OpenAPI definitions
of plugins are namespaced properly.
*/
export interface Artifact {
  // The stored file.
  file: string;

  // The size of the file in bytes.
  size: number;

  // The MD5 checksum of the file if available.
  md5: string;

  // The SHA-1 checksum of the file if available.
  sha1: string;

  // The SHA-224 checksum of the file if available.
  sha224: string;

  // The SHA-256 checksum of the file if available.
  sha256: string;

  // The SHA-384 checksum of the file if available.
  sha384: string;

  // The SHA-512 checksum of the file if available.
  sha512: string;
}
