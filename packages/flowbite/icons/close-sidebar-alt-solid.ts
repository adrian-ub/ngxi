import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCloseSidebarAltSolidIcon],svg[flowbite-close-sidebar-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6z"></svg:path><svg:path fill-rule="evenodd" d="M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6zm-2.293 7.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L7.414 12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteCloseSidebarAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
