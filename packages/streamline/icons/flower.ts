import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlowerIcon],svg[streamline-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.75c.828 0 1.5-.667 1.5-1.49S7.828 5.77 7 5.77s-1.5.667-1.5 1.49s.672 1.49 1.5 1.49"></svg:path><svg:path d="M13.37 5.34a2.57 2.57 0 0 0-3.24-1.64a2.3 2.3 0 0 0-.65.3a2.58 2.58 0 1 0-4.96 0a2.3 2.3 0 0 0-.65-.31a2.561 2.561 0 1 0-1.59 4.87a3 3 0 0 0 .72.12a3 3 0 0 0-.5.51a2.54 2.54 0 0 0 .57 3.57a2.59 2.59 0 0 0 3.6-.56a2.5 2.5 0 0 0 .33-.64q.123.345.34.64a2.59 2.59 0 0 0 4.283-.17a2.54 2.54 0 0 0-.113-2.84a3 3 0 0 0-.5-.51a3 3 0 0 0 .71-.12a2.55 2.55 0 0 0 1.65-3.22"></svg:path></svg:g>`,
})
export class StreamlineFlowerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
