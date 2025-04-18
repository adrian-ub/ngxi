import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlag1Icon],svg[lineicons-flag-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.273 3.41a.75.75 0 1 0-1.5 0v18.5a.75.75 0 0 0 1.5 0v-6h12.75a.75.75 0 0 0 .684-1.058l-1.973-4.384a.75.75 0 0 1 0-.616l1.973-4.384a.75.75 0 0 0-.684-1.058H6.273zm0 2.5h11.59l-1.497 3.327a2.25 2.25 0 0 0 0 1.847l1.497 3.326H6.273z"></svg:path>`,
})
export class LineiconsFlag1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
