import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSolarEnergyIcon],svg[openmoji-solar-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M16 36h19l16 20H31z"></svg:path><svg:circle cx="48" cy="24" r="8" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 36h19.543L52 56H31.429zm1 7v13h10m-3-10h19M26 36l16 20"></svg:path><svg:circle cx="48" cy="24" r="8"></svg:circle></svg:g>`,
})
export class OpenmojiSolarEnergyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
