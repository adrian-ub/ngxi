import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteOpenSidebarSolidIcon],svg[flowbite-open-sidebar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM4.379 9.293a1 1 0 0 0 0 1.414L5.672 12l-1.293 1.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M12 20h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8z"></svg:path></svg:g>`,
})
export class FlowbiteOpenSidebarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
