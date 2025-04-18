import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDoubleQuoteSansLeftIcon],svg[oi-double-quote-sans-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v6l3-3V1zm5 0v6l3-3V1z"></svg:path>`,
})
export class OiDoubleQuoteSansLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
