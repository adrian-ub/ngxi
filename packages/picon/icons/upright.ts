import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUprightIcon],svg[picon-upright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3H0v5h2V5h2v2l4-3l-4-3"></svg:path>`,
})
export class PiconUprightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
