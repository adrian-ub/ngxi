import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayTwoIcon],svg[icon-park-play-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M18.5 24V16.2058L25.25 20.1029L32 24L25.25 27.8971L18.5 31.7942V24Z"></svg:path></svg:g>`,
})
export class IconParkPlayTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
