import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac11SolidIcon],svg[streamline-zodiac-11-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.743.331A1 1 0 0 0 13 0H8.385a1 1 0 0 0 0 2h2.2L4.232 8.355l-1.6-1.6a1 1 0 0 0-1.415 1.414l1.6 1.6l-2.523 2.524a1 1 0 1 0 1.414 1.414l2.524-2.524l1.6 1.601a1 1 0 1 0 1.415-1.414l-1.601-1.6L12 3.413v2.201a1 1 0 1 0 2 0V1a1 1 0 0 0-.257-.669" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac11SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
