import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineCasesIcon],svg[ic-baseline-cases-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6V4l-2-2h-5L9 4v2H5v11s1 2 2 2h13s2-.98 2-2V6zM4 9H2v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H4zm7-4c0-.55.53-1 1-1h3c.46 0 1 .54 1 1v1h-5zM5 6h17v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2z"></svg:path>`,
})
export class IcBaselineCasesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
