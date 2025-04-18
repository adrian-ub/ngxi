import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laNpmIcon],svg[la-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10v11h9v2h7v-2h16V10zm1.777 1.777h7.114v7.668H7.11v-5.888H5.334v5.888H1.777zm8.891 0h7.111v7.666h-3.556v1.78h-3.555zm8.889 0h10.668v7.668h-1.78v-5.888h-1.777v5.888h-1.777v-5.888h-1.78v5.888h-3.554zm-5.334 1.78v4.111H16v-4.111z"></svg:path>`,
})
export class LaNpmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
