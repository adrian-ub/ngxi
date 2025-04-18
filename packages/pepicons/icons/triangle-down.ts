import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleDownIcon],svg[pepicons-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.152 7.53l5 8a1 1 0 0 0 1.696 0l5-8A1 1 0 0 0 15 6H5a1 1 0 0 0-.848 1.53Zm9.044.47L10 13.113L6.804 8h6.392Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsTriangleDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
