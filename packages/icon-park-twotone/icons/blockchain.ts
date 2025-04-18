import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBlockchainIcon],svg[icon-park-twotone-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBlockchain0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.812"></svg:path><svg:path fill="#555" d="m21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17z"></svg:path><svg:path d="M24 17v-7m6 17l7 4m-19-4l-7 4"></svg:path><svg:circle cx="24" cy="7" r="3" fill="#555"></svg:circle><svg:circle cx="8" cy="33" r="3" fill="#555"></svg:circle><svg:circle cx="40" cy="33" r="3" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBlockchain0)"></svg:path>`,
})
export class IconParkTwotoneBlockchainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
