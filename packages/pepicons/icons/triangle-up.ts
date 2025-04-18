import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleUpIcon],svg[pepicons-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.848 13.47l-5-8a1 1 0 0 0-1.696 0l-5 8A1 1 0 0 0 5 15h10a1 1 0 0 0 .848-1.53ZM6.804 13L10 7.887L13.196 13H6.804Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsTriangleUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
