import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBlockchainIcon],svg[icon-park-outline-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.812M21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17zM24 17v-7m6 17l7 4m-19-4l-7 4"></svg:path><svg:circle cx="24" cy="7" r="3"></svg:circle><svg:circle cx="8" cy="33" r="3"></svg:circle><svg:circle cx="40" cy="33" r="3"></svg:circle></svg:g>`,
})
export class IconParkOutlineBlockchainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
