import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyThrowUpIcon],svg[streamline-smiley-throw-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.232 10a6.5 6.5 0 1 1 11.536 0"></svg:path><svg:path d="M3.949 10.193C3.724 7.897 5.972 7.5 7 7.5s3.276.397 3.051 2.693a.4.4 0 0 1-.405.353h-.741c.005 1.386 2.095 1.1 2.095 1.91c0 0-.172 1.044-4 1.044s-4-1.043-4-1.043c0-.811 2.09-.525 2.095-1.912h-.74a.4.4 0 0 1-.406-.352M9.5 4l-1 1.5h2M4.5 4l1 1.5h-2"></svg:path></svg:g>`,
})
export class StreamlineSmileyThrowUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
