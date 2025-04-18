import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareRadioIcon],svg[nrk-hardware-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.047 4l1.528-3H9.82L8.291 4H23v16H1V4zM8.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4.5 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 6h18v12H3z"></svg:path>`,
})
export class NrkHardwareRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
