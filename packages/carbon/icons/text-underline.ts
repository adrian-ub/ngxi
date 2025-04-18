import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextUnderlineIcon],svg[carbon-text-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v2H4zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 0 0 10 0V5h2v11a7 7 0 0 1-7 7"></svg:path>`,
})
export class CarbonTextUnderlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
