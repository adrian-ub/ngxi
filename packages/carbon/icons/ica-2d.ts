import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIca2dIcon],svg[carbon-ica-2d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 24H10a2.002 2.002 0 0 1-2-2V10a2.002 2.002 0 0 1 2-2h12a2.002 2.002 0 0 1 2 2v12a2.002 2.002 0 0 1-2 2zM10 10v12h12V10z" fill="currentColor"></svg:path><svg:path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></svg:path><svg:path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor"></svg:path><svg:path d="M30 11V2h-9v2h7v7h2z" fill="currentColor"></svg:path><svg:path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor"></svg:path>`,
})
export class CarbonIca2dIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
