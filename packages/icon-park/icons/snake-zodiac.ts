import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSnakeZodiacIcon],svg[icon-park-snake-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M35.7858 39.083L38.6142 36.2546C40.9574 33.9114 40.9574 30.1125 38.6142 27.7693V27.7693C36.2711 25.4262 32.4721 25.4262 30.1289 27.7693L27.6675 30.2308"></svg:path><svg:path d="M17.4011 23.5263L24.4721 16.4553C26.8153 14.1121 26.8153 10.3131 24.4721 7.97V7.97C22.129 5.62685 18.33 5.62685 15.9869 7.97L8.91578 15.0411"></svg:path><svg:path d="M18.2827 22.6454L9.62259 31.3055C7.27945 33.6487 7.27945 37.4477 9.62259 39.7908V39.7908C11.9657 42.134 15.7647 42.134 18.1079 39.7908L28.0074 29.8913"></svg:path><svg:path stroke-linejoin="round" d="M15 8.99969H7"></svg:path></svg:g>`,
})
export class IconParkSnakeZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
