import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCodeBlockIcon],svg[carbon-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h8v2H2zm4 6h24v2H6zm0 6h24v2H6zM2 27h8v2H2zm4-6h16v2H6z"></svg:path>`,
})
export class CarbonCodeBlockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
