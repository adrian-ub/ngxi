import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidMarsStrokeHIcon],svg[fa-solid-mars-stroke-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m476.2 247.5l-55.9-55.9c-7.6-7.6-20.5-2.2-20.5 8.5V224H376v-20c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v20h-27.6c-5.8-25.6-18.7-49.9-38.6-69.8C189.6 98 98.4 98 42.2 154.2s-56.2 147.4 0 203.6s147.4 56.2 203.6 0c19.9-19.9 32.8-44.2 38.6-69.8H312v20c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-20h23.9v23.9c0 10.7 12.9 16 20.5 8.5l55.9-55.9c4.6-4.7 4.6-12.3-.1-17m-275.6 65.1c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1s81.9-31.2 113.1 0c31.2 31.1 31.2 81.9 0 113.1"></svg:path>`,
})
export class FaSolidMarsStrokeHIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
