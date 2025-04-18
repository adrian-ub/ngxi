import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckIcon],svg[lineicons-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.28 6.763a.75.75 0 0 1 0 1.06L9.863 17.24a.75.75 0 0 1-1.06 0L4.72 13.157a.75.75 0 0 1 1.06-1.06l3.553 3.552l8.887-8.886a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class LineiconsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
