import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResizeFieldRectangleIcon],svg[hugeicons-resize-field-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.87 20.66c1.51 1.09 3.47 1.09 7.38 1.09v-.01c3.91 0 5.87 0 7.38-1.09c.48-.35.9-.78 1.27-1.28c1.1-1.52 1.1-3.48 1.1-7.38s0-5.86-1.1-7.38c-.36-.49-.79-.92-1.27-1.27c-1.51-1.09-3.47-1.09-7.38-1.09s-5.87 0-7.38 1.09c-.48.35-.9.78-1.27 1.28c-1.1 1.52-1.1 3.49-1.1 7.39s0 5.86 1.1 7.38c.36.49.79.92 1.27 1.27m7.38-.41c-3.58 0-5.38 0-6.5-.81a4.4 4.4 0 0 1-.94-.94C4 17.38 4 15.58 4 12s0-5.38.81-6.5c.27-.37.59-.69.94-.95c1.12-.81 2.91-.81 6.5-.81s5.39 0 6.5.81c.35.26.67.57.94.94c.81 1.12.81 2.92.81 6.5s0 5.38-.81 6.5c-.27.37-.59.69-.94.95c-1.12.81-2.92.81-6.5.81m4.47-1.72c.15.15.34.22.53.22s.38-.07.53-.22l1-1c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1 1c-.29.29-.29.77 0 1.06m-4 0c.15.15.34.22.53.22s.38-.07.53-.22l5-5c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-5 5c-.29.29-.29.77 0 1.06m-4 0c.15.15.34.22.53.22s.38-.07.53-.22l9-9c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-9 9c-.29.29-.29.77 0 1.06" color="currentColor"></svg:path>`,
})
export class HugeiconsResizeFieldRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
