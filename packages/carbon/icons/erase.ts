import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEraseIcon],svg[carbon-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 27h23v2H7zm20.38-16.49l-7.93-7.92a2 2 0 0 0-2.83 0l-14 14a2 2 0 0 0 0 2.83L7.13 24h9.59l10.66-10.66a2 2 0 0 0 0-2.83M15.89 22H8l-4-4l6.31-6.31l7.93 7.92zm3.76-3.76l-7.92-7.93L18 4l8 7.93z"></svg:path>`,
})
export class CarbonEraseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
