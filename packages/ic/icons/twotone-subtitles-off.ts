import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSubtitlesOffIcon],svg[ic-twotone-subtitles-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.83 6l4 4H18v2h-3.17L20 17.17V6zm6.34 12l-2-2H6v-2h5.17L8 10.83V12H6v-2h1.17L4 6.83V18z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18 10h-5.17l2 2H18z"></svg:path><svg:path fill="currentColor" d="M20 4H6.83l2 2H20v11.17l1.76 1.76c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2M1.04 3.87l1.2 1.2C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h13.17l2.96 2.96l1.41-1.41L2.45 2.45zM4 6.83L7.17 10H6v2h2v-1.17L11.17 14H6v2h7.17l2 2H4z"></svg:path>`,
})
export class IcTwotoneSubtitlesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
