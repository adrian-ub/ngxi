import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHairBrushIcon],svg[icon-park-hair-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18.1968 31.4243C21.321 34.5485 28.919 32.0158 35.1674 25.7674C41.4158 19.519 43.9484 11.9211 40.8242 8.79688"></svg:path><svg:path d="M27.3887 6.67529L28.8029 8.08951"></svg:path><svg:path d="M22.4395 11.625L23.8537 13.0392"></svg:path><svg:path d="M18.1963 17.2822L19.6105 18.6964"></svg:path><svg:path d="M16.7822 24.353L18.1964 25.7672"></svg:path><svg:path d="M35.167 4.5542L36.5812 5.96841"></svg:path><svg:path d="M33.7529 13.0396L36.5814 15.868"></svg:path><svg:path d="M28.8037 17.9893L31.6321 20.8177"></svg:path><svg:path d="M23.1465 22.2319L25.9749 25.0604"></svg:path><svg:rect width="6" height="14" x="16.075" y="29.303" rx="3" transform="rotate(45 16.075 29.303)"></svg:rect></svg:g>`,
})
export class IconParkHairBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
