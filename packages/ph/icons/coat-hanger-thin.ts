import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerThinIcon],svg[ph-coat-hanger-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.18 174.4L134.67 96l27.72-20.8A4 4 0 0 0 164 72a36 36 0 1 0-72 0a4 4 0 0 0 8 0a28 28 0 0 1 55.92-2l-30.26 22.7l-.14.1l-108.7 81.6A12 12 0 0 0 24 196h208a12 12 0 0 0 7.2-21.6Zm-3.41 10.87A3.88 3.88 0 0 1 232 188H24a4 4 0 0 1-2.4-7.2L128 101l106.38 79.8a3.88 3.88 0 0 1 1.39 4.47"></svg:path>`,
})
export class PhCoatHangerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
