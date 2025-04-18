import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckSquare2Icon],svg[lineicons-check-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.75 18.5V8.678l-1.5 1.5V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75h12.814l.98-.98q.136-.136.288-.243A2.24 2.24 0 0 0 18.5 3.25h-13A2.25 2.25 0 0 0 3.25 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25"></svg:path><svg:path fill="currentColor" d="M20.484 6.519a.75.75 0 0 0-1.06-1.061l-7.494 7.493l-3.353-3.353a.75.75 0 1 0-1.06 1.061l3.882 3.883a.75.75 0 0 0 1.061 0z"></svg:path>`,
})
export class LineiconsCheckSquare2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
