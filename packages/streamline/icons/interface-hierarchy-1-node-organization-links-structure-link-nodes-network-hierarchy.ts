import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHierarchy1NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon],svg[streamline-interface-hierarchy-1-node-organization-links-structure-link-nodes-network-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.5" cy="7" r="2"></svg:circle><svg:circle cx="11.5" cy="2.5" r="2"></svg:circle><svg:circle cx="11.5" cy="11.5" r="2"></svg:circle><svg:path d="m3.71 5.41l5.85-2.43M3.71 8.59l5.85 2.43"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHierarchy1NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
