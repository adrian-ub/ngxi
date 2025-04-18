import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPotentiometerIcon],svg[icon-park-potentiometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#2F88FF" rx="20" ry="8"></svg:ellipse><svg:path d="M24 4V19"></svg:path><svg:path d="M16 34V42"></svg:path><svg:path d="M24 34V44"></svg:path><svg:path d="M32 34V42"></svg:path><svg:path d="M4 20V32.3636C4 32.3636 5.11012 34.7605 8.5 37.0288"></svg:path><svg:path d="M44 20V32.3636C44 32.3636 42.8899 34.7605 39.5 37.0288"></svg:path></svg:g>`,
})
export class IconParkPotentiometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
