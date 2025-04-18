import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWaterFlashFillIcon],svg[ri-water-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.64 6.639L12.006.275l6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728m7.365 4.364v-4.5l-4.5 6.5h2.5v4.5l4.5-6.5z"></svg:path>`,
})
export class RiWaterFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
