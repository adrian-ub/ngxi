import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeedIcon],svg[icon-park-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34.0234 6.68921C31.0764 4.97912 27.6525 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 20.3727 43.0344 16.9709 41.3461 14.0377"></svg:path><svg:path fill="#2F88FF" d="M31.9498 16.0502C31.9498 16.0502 28.5621 25.0947 27.0001 26.6568C25.438 28.2189 22.9053 28.2189 21.3432 26.6568C19.7811 25.0947 19.7811 22.562 21.3432 20.9999C22.9053 19.4378 31.9498 16.0502 31.9498 16.0502Z"></svg:path></svg:g>`,
})
export class IconParkSpeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
