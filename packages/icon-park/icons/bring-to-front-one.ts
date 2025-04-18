import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBringToFrontOneIcon],svg[icon-park-bring-to-front-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21V34H27"></svg:path><svg:path d="M21 14H34V27"></svg:path><svg:path fill="#2F88FF" d="M5 21V5H21V21H5Z"></svg:path><svg:path fill="#2F88FF" d="M27 43V27H43V43H27Z"></svg:path></svg:g>`,
})
export class IconParkBringToFrontOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
