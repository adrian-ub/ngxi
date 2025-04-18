import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneKeyTwoIcon],svg[icon-park-twotone-key-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTKeyTwo0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="15" cy="33" r="8" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29 16l7 6m-16 4L36 8l7 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTKeyTwo0)"></svg:path>`,
})
export class IconParkTwotoneKeyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
