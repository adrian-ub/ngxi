import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSunsetIcon],svg[icon-park-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M19 8L33 34H5L19 8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 26L34 20L43 34H32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 41L38 41"></svg:path><svg:circle cx="38" cy="10" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSunsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
