import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLightRainIcon],svg[icon-park-light-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M16 23V27"></svg:path><svg:path d="M24 27V31"></svg:path><svg:path d="M32 23V27"></svg:path><svg:path d="M16 34V38"></svg:path><svg:path d="M24 38V42"></svg:path><svg:path d="M32 34V38"></svg:path></svg:g>`,
})
export class IconParkLightRainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
