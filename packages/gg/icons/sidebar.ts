import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSidebarIcon],svg[gg-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21 20H7V4h14zm-2-2H9V6h10z" clip-rule="evenodd"></svg:path><svg:path d="M3 20h2V4H3z"></svg:path></svg:g>`,
})
export class GgSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
