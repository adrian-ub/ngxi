import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laKorvueIcon],svg[la-korvue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3 3v5.88h7.81L21.509 10h-4.584L14 15.506V10zm0 6.5v5.47h4v-5.175l3 5.176h4.814L18.111 16.5z"></svg:path>`,
})
export class LaKorvueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
