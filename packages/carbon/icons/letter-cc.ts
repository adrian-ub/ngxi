import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterCcIcon],svg[carbon-letter-cc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 23h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zm-9 0H9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H9v10h6z"></svg:path>`,
})
export class CarbonLetterCcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
