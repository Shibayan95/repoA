/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V2beta1ContainerResourceMetricStatus } from './v2beta1ContainerResourceMetricStatus';
import { V2beta1ExternalMetricStatus } from './v2beta1ExternalMetricStatus';
import { V2beta1ObjectMetricStatus } from './v2beta1ObjectMetricStatus';
import { V2beta1PodsMetricStatus } from './v2beta1PodsMetricStatus';
import { V2beta1ResourceMetricStatus } from './v2beta1ResourceMetricStatus';

/**
* MetricStatus describes the last-read state of a single metric.
*/
export class V2beta1MetricStatus {
    'containerResource'?: V2beta1ContainerResourceMetricStatus;
    'external'?: V2beta1ExternalMetricStatus;
    'object'?: V2beta1ObjectMetricStatus;
    'pods'?: V2beta1PodsMetricStatus;
    'resource'?: V2beta1ResourceMetricStatus;
    /**
    * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "V2beta1ContainerResourceMetricStatus"
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "V2beta1ExternalMetricStatus"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2beta1ObjectMetricStatus"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2beta1PodsMetricStatus"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2beta1ResourceMetricStatus"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2beta1MetricStatus.attributeTypeMap;
    }
}

