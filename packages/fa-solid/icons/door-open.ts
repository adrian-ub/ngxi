import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidDoorOpenIcon],svg[fa-solid-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17M264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32s24 14.33 24 32s-10.75 32-24 32"></svg:path>`,
})
export class FaSolidDoorOpenIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
