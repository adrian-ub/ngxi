import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckCircle1Icon],svg[lineicons-check-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.507 10.525a.75.75 0 1 0-1.06-1.061l-3.482 3.481l-1.411-1.41a.75.75 0 0 0-1.061 1.06l1.942 1.941a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCheckCircle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
