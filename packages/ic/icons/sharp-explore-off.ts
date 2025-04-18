import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpExploreOffIcon],svg[ic-sharp-explore-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 6l-2.91 6.26l5.25 5.25A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66l5.25 5.25zM2.1 4.93l1.56 1.56A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.61 5.51-1.66l1.56 1.56l1.41-1.41L3.51 3.51zm6.81 6.81l3.35 3.35L6 18z"></svg:path>`,
})
export class IcSharpExploreOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
