import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPineIcon],svg[picon-pine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8H3V6H0l3-2H0l3-2H1l3-2l3 2H5l3 2H5l3 2H5"></svg:path>`,
})
export class PiconPineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
