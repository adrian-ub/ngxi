import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHierarchy2NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon],svg[streamline-interface-hierarchy-2-node-organization-links-structure-link-nodes-network-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2.5" r="1.5"></svg:circle><svg:circle cx="2" cy="11.5" r="1.5"></svg:circle><svg:circle cx="7" cy="11.5" r="1.5"></svg:circle><svg:circle cx="12" cy="11.5" r="1.5"></svg:circle><svg:path d="M2 10V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2M7 4v6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHierarchy2NodeOrganizationLinksStructureLinkNodesNetworkHierarchyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
