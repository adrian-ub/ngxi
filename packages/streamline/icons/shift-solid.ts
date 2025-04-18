import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShiftSolidIcon],svg[streamline-shift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.646.854L1.354 6.146A.5.5 0 0 0 1.707 7H3.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V7h1.793a.5.5 0 0 0 .353-.854L7.354.854a.5.5 0 0 0-.708 0"></svg:path>`,
})
export class StreamlineShiftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
