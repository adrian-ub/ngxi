import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmInstanaIcon],svg[carbon-ibm-instana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h2v6H9zm12 0h2v6h-2zm-8-2h2v13h-2zm4-2h2v13h-2z"></svg:path><svg:circle cx="22" cy="5" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="27" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22.092 28H14v-2h8.092L28 16l-2.7-4.568l1.723-1.018l2.7 4.568c.37.628.37 1.408 0 2.036l-5.91 10a2.01 2.01 0 0 1-1.721.982M4.977 21.586l-2.7-4.568a2 2 0 0 1 0-2.036l5.91-10A2.01 2.01 0 0 1 9.909 4H18v2H9.91L4 16l2.7 4.568z"></svg:path>`,
})
export class CarbonIbmInstanaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
