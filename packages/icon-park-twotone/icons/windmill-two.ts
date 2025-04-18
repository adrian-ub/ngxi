import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWindmillTwoIcon],svg[icon-park-twotone-windmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWindmillTwo0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 24c5.523 0 10-4.477 10-10S29.523 4 24 4zm0 0c0 5.523 4.477 10 10 10s10-4.477 10-10zm0 0c0-5.523-4.477-10-10-10S4 18.477 4 24zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWindmillTwo0)"></svg:path>`,
})
export class IconParkTwotoneWindmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
