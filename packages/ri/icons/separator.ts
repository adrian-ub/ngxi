import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSeparatorIcon],svg[ri-separator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h2v2H2zm4 0h12v2H6zm14 0h2v2h-2z"></svg:path>`,
})
export class RiSeparatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
