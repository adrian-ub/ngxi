import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCicsSitIcon],svg[carbon-cics-sit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 22l7 5l-7 5z"></svg:path><svg:path fill="currentColor" d="M26 3H6C4.346 3 3 4.346 3 6v20c0 1.654 1.346 3 3 3h11v-9h12V6c0-1.654-1.346-3-3-3M6 5h20a1 1 0 0 1 1 1v3H5V6a1 1 0 0 1 1-1m9 6v7H5v-7zm0 16H6a1 1 0 0 1-1-1v-6h10zm2-9v-7h10v7z"></svg:path>`,
})
export class CarbonCicsSitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
