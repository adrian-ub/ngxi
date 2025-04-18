import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFunctionsIcon],svg[ri-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 18l7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5z"></svg:path>`,
})
export class RiFunctionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
