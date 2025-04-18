import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLipstickSolidIcon],svg[streamline-lipstick-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.496 5.656l-.09-.09l1.621-1.589a.98.98 0 0 0 .285-.697V1.151a.98.98 0 0 0-.609-.903a.98.98 0 0 0-1.07.206l-2.669 2.67l-.13-.13a.75.75 0 0 0-1.06 0l-2.059 2.06l-.067-.067a.53.53 0 0 0-.749 0L1.166 8.719l-.001.001a1.64 1.64 0 0 0 0 2.311l2.32 2.32a1.64 1.64 0 0 0 2.311 0h.001l3.734-3.734a.53.53 0 0 0 0-.749l-.093-.093l2.058-2.058a.75.75 0 0 0 0-1.06ZM8.353 7.691l1.48-1.48l-1.554-1.553l-1.48 1.48z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLipstickSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
