import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOrdinalIcon],svg[carbon-ordinal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 26V4h-8v6h-6v6H6v10H2v2h28v-2ZM8 26v-8h4v8Zm6 0V12h4v14Zm6 0V6h4v20Z"></svg:path>`,
})
export class CarbonOrdinalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
