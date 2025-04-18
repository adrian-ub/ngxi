import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsKey1Icon],svg[lineicons-key-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.986 4.528l2.104 2.104l-1.059 1.06l-1.043-1.044a.75.75 0 1 0-1.06 1.06l1.043 1.044l-2.334 2.334a5.374 5.374 0 1 0 1.06 1.06l6.044-6.043a.75.75 0 1 0-1.06-1.061l-.53.53l-2.104-2.104a.75.75 0 0 0-1.06 1.06m-2.858 8.098l.015.014l.015.015a3.873 3.873 0 1 1-.03-.03" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsKey1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
