import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRoutesIcon],svg[mdi-routes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10H5L3 8l2-2h6V3l1-1l1 1v1h6l2 2l-2 2h-6v2h6l2 2l-2 2h-6v6a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiRoutesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
