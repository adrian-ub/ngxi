import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonThisSideUpIcon],svg[carbon-this-side-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zM7 5.828V24h2V5.828l3.586 3.586L14 8L8 2L2 8l1.414 1.414zm16 0V24h2V5.828l3.586 3.586L30 8l-6-6l-6 6l1.414 1.414z"></svg:path>`,
})
export class CarbonThisSideUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
