import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHeartRateIcon],svg[icon-park-heart-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31.8785 37C29.0529 39.0738 26.2237 40.5872 24 41.3262C17 39 4 29 4 18C4 11.9249 8.92487 7 15 7C18.7203 7 22.0093 8.8469 24 11.6738C25.9907 8.8469 29.2797 7 33 7C39.0751 7 44 11.9249 44 18C44 19.7465 43.6723 21.4677 43.0929 23.1371"></svg:path><svg:path d="M27 29H31L34 25L37 33L39.9625 29H44"></svg:path></svg:g>`,
})
export class IconParkHeartRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
