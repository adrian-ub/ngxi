import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutSidebarRightIcon],svg[mdi-page-layout-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8 6v8h4V8z"></svg:path>`,
})
export class MdiPageLayoutSidebarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
