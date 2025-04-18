import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac8SolidIcon],svg[streamline-zodiac-8-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .886a4.692 4.692 0 0 0-4.618 5.538H1a1 1 0 1 0 0 2h2.806a1 1 0 0 0 .861-1.508a2.6 2.6 0 0 1-.36-1.332v-.006a2.692 2.692 0 1 1 5.385 0v.023a2.6 2.6 0 0 1-.332 1.333a1 1 0 0 0 .87 1.49H13a1 1 0 1 0 0-2h-1.37q.07-.424.062-.857A4.69 4.69 0 0 0 7 .886m-6 9.72a1 1 0 1 0 0 2h12a1 1 0 0 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac8SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
