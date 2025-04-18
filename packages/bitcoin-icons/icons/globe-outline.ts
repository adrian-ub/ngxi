import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGlobeOutlineIcon],svg[bitcoin-icons-globe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:ellipse cx="12" cy="12.006" rx="3.095" ry="7.998"></svg:ellipse><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m4 11.995l16 .01"></svg:path></svg:g>`,
})
export class BitcoinIconsGlobeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
