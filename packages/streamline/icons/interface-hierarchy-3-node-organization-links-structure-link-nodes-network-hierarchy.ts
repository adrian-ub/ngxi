import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHierarchy3NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon],svg[streamline-interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="3.5" height="3.5" x=".5" y="10" rx=".5"></svg:rect><svg:rect width="3.5" height="3.5" x="10" y="10" rx=".5"></svg:rect><svg:rect width="4" height="4" x="5" y=".5" rx=".5"></svg:rect><svg:path d="M4 12h6M5.09 4.29L2.5 10m6.41-5.71L11.5 10"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHierarchy3NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
