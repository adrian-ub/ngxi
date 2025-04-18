import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSubtractSquareIcon],svg[proicons-subtract-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.25 12h7.5"></svg:path><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="4"></svg:rect></svg:g>`,
})
export class ProiconsSubtractSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
