import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSidebarCollapseIcon],svg[iconoir-sidebar-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"></svg:path><svg:path d="M7.25 10L5.5 12l1.75 2m2.25 7V3"></svg:path></svg:g>`,
})
export class IconoirSidebarCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
