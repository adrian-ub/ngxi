import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biBrightnessAltLowIcon],svg[bi-brightness-alt-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m5 6a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M2 11a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m10.243-3.536a.5.5 0 1 1-.707-.707a.5.5 0 0 1 .707.707m-8.486-.707a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707M8 7a4 4 0 0 0-4 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5a4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"></svg:path>`,
})
export class BiBrightnessAltLowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
