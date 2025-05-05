import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDownrightIcon],svg[picon-downright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4H2V0H0v6h4v2l4-3l-4-3"></svg:path>`,
})
export class PiconDownrightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
