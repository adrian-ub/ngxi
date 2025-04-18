import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siClockAltFillIcon],svg[si-clock-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5.844c0 .55.375 1.03.909 1.164l3.848.962a1 1 0 1 0 .486-1.94L13 11.22z" clip-rule="evenodd"></svg:path>`,
})
export class SiClockAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
