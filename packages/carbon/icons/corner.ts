import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCornerIcon],svg[carbon-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9H14V6H6v8h3v14h2V14h3v-3h14Zm-16 3H8V8h4Z"></svg:path>`,
})
export class CarbonCornerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
