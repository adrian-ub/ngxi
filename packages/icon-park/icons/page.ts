import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPageIcon],svg[icon-park-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M6 17H42"></svg:path><svg:path stroke-linecap="round" d="M17 42V17"></svg:path></svg:g>`,
})
export class IconParkPageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
