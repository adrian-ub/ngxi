import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsForbidden16Icon],svg[qlementine-icons-forbidden-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8c0 3.87-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7m-1 0c0 3.31-2.69 6-6 6c-1.48 0-2.83-.534-3.87-1.42l8.46-8.46a6 6 0 0 1 1.42 3.87zM3.4 11.87l8.46-8.46a6 6 0 0 0-3.87-1.42c-3.31 0-6 2.69-6 6c0 1.48.534 2.83 1.42 3.87z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsForbidden16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
