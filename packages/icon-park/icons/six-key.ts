import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSixKeyIcon],svg[icon-park-six-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24.5 33C27.5376 33 30 30.5376 30 27.5C30 24.4624 27.5376 22 24.5 22C21.4624 22 19 24.4624 19 27.5C19 30.5376 21.4624 33 24.5 33Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29.5962 17.7392C28.7778 15.5461 26.8044 14 24.5 14C21.4624 14 19 16.6863 19 20V27"></svg:path></svg:g>`,
})
export class IconParkSixKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
