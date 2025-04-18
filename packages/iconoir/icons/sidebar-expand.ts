import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSidebarExpandIcon],svg[iconoir-sidebar-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2m-9.5 0V3"></svg:path><svg:path d="m5.5 10l1.75 2l-1.75 2"></svg:path></svg:g>`,
})
export class IconoirSidebarExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
