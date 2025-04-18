import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMonumentTwoIcon],svg[icon-park-twotone-monument-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMonumentTwo0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44h40"></svg:path><svg:path fill="#555" d="m18 44l2-36.842L28 4l2 40z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMonumentTwo0)"></svg:path>`,
})
export class IconParkTwotoneMonumentTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
