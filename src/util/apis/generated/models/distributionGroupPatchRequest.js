/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DistributionGroupPatchRequest class.
 * @constructor
 * @member {string} [name] The name of the distribution group
 * 
 */
function DistributionGroupPatchRequest() {
}

/**
 * Defines the metadata of DistributionGroupPatchRequest
 *
 * @returns {object} metadata of DistributionGroupPatchRequest
 *
 */
DistributionGroupPatchRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DistributionGroupPatchRequest',
    type: {
      name: 'Composite',
      className: 'DistributionGroupPatchRequest',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DistributionGroupPatchRequest;