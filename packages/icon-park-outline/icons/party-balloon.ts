import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePartyBalloonIcon],svg[icon-park-outline-party-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 16c1-8-2.873-12-9.873-12S13 9 14 16s7.255 12 10.127 12S33 24 34 16m-9 12c-2 .97-5 3.889-5 7s10 1.444 10 4.556C30 42.666 19 44 19 44"></svg:path>`,
})
export class IconParkOutlinePartyBalloonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
