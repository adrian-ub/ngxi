import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitKronaIcon],svg[formkit-krona-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path><svg:path fill="currentColor" d="M5 4h1v8H5zm5 2.6h1V12h-1z"></svg:path><svg:path fill="currentColor" d="M11 9h-1c0-1.1.9-2 2-2h.62v1H12c-.55 0-1 .45-1 1m-1.4 3L7.17 8.53L9.71 6H8.29L5.15 9.15l.7.7l.6-.6L8.38 12z"></svg:path>`,
})
export class FormkitKronaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
