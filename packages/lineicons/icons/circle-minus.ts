import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCircleMinusIcon],svg[lineicons-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.2 29.7H21.8c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2h20.4c1.2 0 2.2-1 2.2-2.3c-.1-1.2-1.1-2.2-2.3-2.2"></svg:path><svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3S62.4 48.7 62.4 32C62.3 15.3 48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7"></svg:path>`,
})
export class LineiconsCircleMinusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
