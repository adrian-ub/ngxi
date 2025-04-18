import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac7SolidIcon],svg[streamline-zodiac-7-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.106.553A1 1 0 0 1 1.447.106C3.065.914 5.605 3.164 7 7.019C8.395 3.164 10.935.914 12.553.106a1 1 0 1 1 .894 1.788C11.771 2.733 8 6.195 8 13a1 1 0 1 1-2 0C6 6.195 2.23 2.733.553 1.894A1 1 0 0 1 .106.553" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac7SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
