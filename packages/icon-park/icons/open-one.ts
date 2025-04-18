import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenOneIcon],svg[icon-park-open-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18"></svg:path><svg:path d="M21 26L33 13"></svg:path><svg:path d="M26 21L30 25"></svg:path><svg:path d="M31 16L35 20"></svg:path><svg:path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30"></svg:path><svg:circle cx="18" cy="30" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkOpenOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
