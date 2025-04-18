import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareRootIcon],svg[mdi-square-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.76 16.83L14.59 14l-2.83-2.83l1.41-1.41L16 12.59l2.83-2.83l1.41 1.41L17.41 14l2.83 2.83l-1.41 1.41L16 15.41l-2.83 2.83zM2 11h3l2.29 5.4L10 6h12v2H11.55L8.68 19H6.22l-2.54-6H2z"></svg:path>`,
})
export class MdiSquareRootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
