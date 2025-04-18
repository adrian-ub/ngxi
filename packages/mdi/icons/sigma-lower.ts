import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSigmaLowerIcon],svg[mdi-sigma-lower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12c0 4.42-3.36 8-7.5 8S4 16.42 4 12s3.36-8 7.5-8H20v2h-3.54A8.3 8.3 0 0 1 19 12m-7.5-6C8.46 6 6 8.69 6 12s2.46 6 5.5 6s5.5-2.69 5.5-6s-2.46-6-5.5-6"></svg:path>`,
})
export class MdiSigmaLowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
