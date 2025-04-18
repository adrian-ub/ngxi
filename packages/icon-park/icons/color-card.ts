import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkColorCardIcon],svg[icon-park-color-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M10 44C13.3137 44 16 41.3137 16 38V23.5147V4H4V38C4 41.3137 6.68629 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44C13.3137 44 16 41.3137 16 38V23.5147M10 44C6.68629 44 4 41.3137 4 38V4H16V23.5147M10 44H44V32H24.4853M5.75736 42.2426C8.10051 44.5858 11.8995 44.5858 14.2426 42.2426L24.4853 32M16 23.5147L35.0147 4.5L35.4853 4L43.9853 12.5L24.4853 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.2427 42.2426L43.9853 12.5L35.4853 4L16 23.5147"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.4853 32H44V44H12.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.4853 32H44V44H12.5"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44C13.3137 44 16 41.3137 16 38V23.5147V4H4V38C4 41.3137 6.68629 44 10 44Z"></svg:path></svg:g>`,
})
export class IconParkColorCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
