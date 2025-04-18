import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHoleFillingCursorIcon],svg[carbon-hole-filling-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19" cy="19" r="4" fill="currentColor"></svg:circle><svg:path d="M28 30H10a2.002 2.002 0 0 1-2-2V10a2.002 2.002 0 0 1 2-2h18a2.002 2.002 0 0 1 2 2v18a2.002 2.002 0 0 1-2 2zM10 10v18h18V10z" fill="currentColor"></svg:path><svg:path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></svg:path>`,
})
export class CarbonHoleFillingCursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
