import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronUpCircleIcon],svg[lineicons-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.048 13.78a.75.75 0 0 0 1.06-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0l-3.25 3.25a.75.75 0 1 0 1.06 1.06l2.72-2.72z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.328 2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsChevronUpCircleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
