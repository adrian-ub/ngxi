import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPowerpointIcon],svg[icon-park-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="10" height="10" x="19" y="15" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M19 33L19 15"></svg:path></svg:g>`,
})
export class IconParkPowerpointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
