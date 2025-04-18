import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIpadIcon],svg[icon-park-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="30" height="38" x="9" y="5" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 36L26 36"></svg:path></svg:g>`,
})
export class IconParkIpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
