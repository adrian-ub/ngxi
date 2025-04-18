import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFormOneIcon],svg[icon-park-form-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path d="M6 14H40"></svg:path><svg:path d="M30 22H42"></svg:path><svg:path d="M30 30H42"></svg:path><svg:path d="M23 22H24"></svg:path><svg:path d="M23 30H24"></svg:path><svg:path d="M14 6L14 42"></svg:path></svg:g>`,
})
export class IconParkFormOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
