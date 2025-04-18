import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDrillDownIcon],svg[carbon-drill-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 6l1.414-1.414L15 8.172V0h2v8.172l3.586-3.586L22 6l-6 6z"></svg:path><svg:path fill="currentColor" d="M22 16a5.98 5.98 0 0 0-1.757-4.243L16 16l-4.243-4.243A6 6 0 1 0 22 16"></svg:path><svg:path fill="currentColor" d="M30 16a13.96 13.96 0 0 0-4.105-9.895l-1.414 1.414a12 12 0 1 1-16.962 0L6.105 6.105A13.997 13.997 0 1 0 30 16"></svg:path>`,
})
export class CarbonDrillDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
