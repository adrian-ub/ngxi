import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShavingIcon],svg[icon-park-shaving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="27" x="14" y="17" fill="#2F88FF" rx="2"></svg:rect><svg:rect width="10" height="5" x="19" y="12"></svg:rect><svg:path d="M19 12C19 10 19 10 19.0001 9C19.0001 8 19 4 27 4C35 4 36 4 36 4V9H29V12"></svg:path></svg:g>`,
})
export class IconParkShavingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
