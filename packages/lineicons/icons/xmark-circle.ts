import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsXmarkCircleIcon],svg[lineicons-xmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.784 8.784a.75.75 0 0 0 0 1.06L10.939 12l-2.155 2.155a.75.75 0 0 0 1.06 1.06L12 13.062l2.155 2.155a.75.75 0 0 0 1.06-1.06L13.06 12l2.155-2.155a.75.75 0 1 0-1.06-1.06L12 10.938L9.843 8.784a.75.75 0 0 0-1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsXmarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
