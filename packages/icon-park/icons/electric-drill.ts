import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkElectricDrillIcon],svg[icon-park-electric-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 9H39.6977C42.0214 9 43.8561 10.9733 43.6871 13.2909L43.1038 21.2909C42.9513 23.3816 41.2107 25 39.1144 25H20V9Z"></svg:path><svg:path d="M30.0909 25H39L34.9112 36.2443C34.3096 37.8987 32.7372 39 30.9769 39V39C28.0717 39 26.0497 36.1133 27.0425 33.383L30.0909 25Z"></svg:path><svg:rect width="6" height="10" x="14" y="12" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M14 17H4"></svg:path></svg:g>`,
})
export class IconParkElectricDrillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
