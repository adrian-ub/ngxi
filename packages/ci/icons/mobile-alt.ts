import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMobileAltIcon],svg[ci-mobile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 23h-10a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2Zm-10-20v18h10V3h-10Zm5 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class CiMobileAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
