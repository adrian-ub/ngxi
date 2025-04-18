import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsShiftRightIcon],svg[lineicons-shift-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.578 20.5a.75.75 0 0 0 1.5 0v-16a.75.75 0 0 0-1.5 0zm-2.5-8.001c0 .216-.091.41-.237.547l-4.607 4.61a.75.75 0 1 1-1.061-1.06l3.345-3.347H4.328a.75.75 0 0 1 0-1.5h10.186l-3.341-3.343a.75.75 0 0 1 1.061-1.06l4.572 4.575a.75.75 0 0 1 .272.578"></svg:path>`,
})
export class LineiconsShiftRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
