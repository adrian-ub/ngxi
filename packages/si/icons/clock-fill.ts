import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siClockFillIcon],svg[si-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5H8a1 1 0 1 0 0 2h3.8a1.2 1.2 0 0 0 1.2-1.2z" clip-rule="evenodd"></svg:path>`,
})
export class SiClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
