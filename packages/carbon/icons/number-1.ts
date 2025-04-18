import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumber1Icon],svg[carbon-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10v12zm1-1h-5v2h3v10h-3v2h8v-2h-3z"></svg:path>`,
})
export class CarbonNumber1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
