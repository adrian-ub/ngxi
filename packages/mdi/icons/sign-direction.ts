import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignDirectionIcon],svg[mdi-sign-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12H3.5L6 9.5L3.5 7H11V3l1-1l1 1v4h5l2.5 2.5L18 12h-5v8a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiSignDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
