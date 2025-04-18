import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDoubleIntegerIcon],svg[carbon-double-integer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8V6h-4V2h-2v4H8V2H6v4H2v2h4v3H2v2h4v4h2v-4h3v4h2v-4h4v-2h-4V8zm-6 3H8V8h3zm19 10v-2h-4v-4h-2v4h-3v-4h-2v4h-4v2h4v3h-4v2h4v4h2v-4h3v4h2v-4h4v-2h-4v-3zm-6 3h-3v-3h3z"></svg:path>`,
})
export class CarbonDoubleIntegerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
