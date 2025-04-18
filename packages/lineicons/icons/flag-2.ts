import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlag2Icon],svg[lineicons-flag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.273 3.41a.75.75 0 1 0-1.5 0v18.5a.75.75 0 0 0 1.5 0v-6h5.25a2.25 2.25 0 0 0 2.25 2.25h5.25a.75.75 0 0 0 .684-1.058l-1.973-4.384a.75.75 0 0 1 0-.616l1.973-4.384a.75.75 0 0 0-.684-1.058h-6a2.25 2.25 0 0 0-2.25-2.25h-4.5zm0 2.5h4.5a.75.75 0 0 1 .75.75v7.75h-5.25zm6.75 2.25h4.84l-1.497 3.327a2.25 2.25 0 0 0 0 1.847l1.497 3.326h-4.09a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsFlag2Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
