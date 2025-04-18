import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkElectricIronIcon],svg[icon-park-electric-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18.7125C5 18.319 5.319 18 5.7125 18H19.1519C32.3228 18 43 28.6772 43 41.8481V41.8481C43 41.932 42.932 42 42.8481 42H5V18.7125Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18V8H25"></svg:path><svg:circle cx="15" cy="27" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M5 36H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 20.0002C30.3333 18.0002 34.4 13.6002 38 16.0002C41.5 18.3335 38.5 24.0002 37 26.0002"></svg:path></svg:g>`,
})
export class IconParkElectricIronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
