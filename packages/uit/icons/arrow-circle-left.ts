import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitArrowCircleLeftIcon],svg[uit-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11.5H8.707l3.646-3.646a.5.5 0 0 0-.707-.707l-4.5 4.5a.5.5 0 0 0-.145.35L7 12a.5.5 0 0 0 .146.354l4.5 4.5a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.708L8.708 12.5H16.5a.5.5 0 0 0 0-1M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class UitArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
