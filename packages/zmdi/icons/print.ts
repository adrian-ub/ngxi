import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPrintIcon],svg[zmdi-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 107q26 0 45 18.5t19 45.5v128h-86v85H85v-85H0V171q0-27 18.5-45.5T64 107zm-64 234V235H128v106zm63.5-149q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5M341 0v85H85V0z"></svg:path>`,
})
export class ZmdiPrintIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
