import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUlikecamIcon],svg[icon-park-ulikecam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:path d="M22 44C31.9411 44 40 35.9411 40 26C40 16.0589 31.9411 8 22 8C12.0589 8 4 16.0589 4 26C4 35.9411 12.0589 44 22 44Z"></svg:path><svg:path d="M41 10C42.6569 10 44 8.65685 44 7C44 5.34315 42.6569 4 41 4C39.3431 4 38 5.34315 38 7C38 8.65685 39.3431 10 41 10Z"></svg:path></svg:g>`,
})
export class IconParkUlikecamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
