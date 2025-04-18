import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCircleMultipleOutlineIcon],svg[mdi-circle-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 14a6 6 0 0 0 6-6a6 6 0 0 0-6-6a6 6 0 0 0-6 6a6 6 0 0 0 6 6M3 12a5.99 5.99 0 0 0 4 5.65v2.09c-3.45-.89-6-4.01-6-7.74s2.55-6.85 6-7.74v2.09C4.67 7.17 3 9.39 3 12"></svg:path>`,
})
export class MdiCircleMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
