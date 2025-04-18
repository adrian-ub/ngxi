import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNextIcon],svg[whh-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.62 1024q-53 0-90.5-37.5t-37.5-90.5V128q0-53 37.5-90.5T896.62 0t90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-834-11q-25 27-62-13V24q37-40 62-13l563 463q15 16 15 38.5t-15 37.5z"></svg:path>`,
})
export class WhhNextIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
