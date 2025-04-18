import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEuroIcon],svg[lineicons-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.043 5a7.25 7.25 0 0 0-6.71 4.5h4.702a.75.75 0 0 1 0 1.5H8.901a7.3 7.3 0 0 0 0 2.5h5.134a.75.75 0 0 1 0 1.5H9.333a7.25 7.25 0 0 0 9.321 4.016a.75.75 0 1 1 .54 1.4A8.754 8.754 0 0 1 7.734 15H5.578a.75.75 0 0 1 0-1.501h1.804a8.8 8.8 0 0 1 0-2.5H5.579a.75.75 0 0 1 0-1.5h2.155a8.754 8.754 0 0 1 11.46-5.415a.75.75 0 0 1-.54 1.4A7.2 7.2 0 0 0 16.044 5"></svg:path>`,
})
export class LineiconsEuroIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
