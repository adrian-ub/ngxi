import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSidebarOpenIcon],svg[gg-sidebar-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h18v16H3zm6 2h10v12H9z" clip-rule="evenodd"></svg:path>`,
})
export class GgSidebarOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
