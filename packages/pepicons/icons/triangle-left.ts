import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleLeftIcon],svg[pepicons-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.47 4.152l-8 5a1 1 0 0 0 0 1.696l8 5A1 1 0 0 0 14 15V5a1 1 0 0 0-1.53-.848ZM12 6.804v6.392L6.887 10L12 6.804Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsTriangleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
