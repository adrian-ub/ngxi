import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePartyBalloonIcon],svg[icon-park-twotone-party-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPartyBalloon0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M34 16c1-8-2.873-12-9.873-12S13 9 14 16s7.255 12 10.127 12S33 24 34 16"></svg:path><svg:path d="M25 28c-2 .97-5 3.889-5 7s10 1.444 10 4.556C30 42.666 19 44 19 44"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPartyBalloon0)"></svg:path>`,
})
export class IconParkTwotonePartyBalloonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
