import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCarGarageIcon],svg[bxs-car-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 22 18v-3c0-.831-.507-1.542-1.228-1.845l-1.368-4.104A2.995 2.995 0 0 0 16.559 7H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 15v3c0 .738.404 1.376 1 1.723M5.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 18m13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 18M7.441 9h9.117a1 1 0 0 1 .949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684"></svg:path><svg:path fill="currentColor" d="M22 7.388V5.279l-9.684-3.228a1 1 0 0 0-.658.009L2 5.572V7.7l10.015-3.642z"></svg:path>`,
})
export class BxsCarGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
