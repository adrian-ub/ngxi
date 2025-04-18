import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleRightIcon],svg[pepicons-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.53 15.848l8-5a1 1 0 0 0 0-1.696l-8-5A1 1 0 0 0 6 5v10a1 1 0 0 0 1.53.848ZM8 13.196V6.804L13.113 10L8 13.196Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsTriangleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
