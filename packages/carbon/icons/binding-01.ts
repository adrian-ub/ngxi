import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBinding01Icon],svg[carbon-binding-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10h24v2H4zm0 10h24v2H4z"></svg:path>`,
})
export class CarbonBinding01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
