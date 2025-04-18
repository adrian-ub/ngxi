import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselinePentagonIcon],svg[ic-baseline-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 9l4 12h12l4-12l-10-7z"></svg:path>`,
})
export class IcBaselinePentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
