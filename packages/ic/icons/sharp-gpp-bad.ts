import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpGppBadIcon],svg[ic-sharp-gpp-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm3.5 12.09l-1.41 1.41L12 13.42L9.91 15.5L8.5 14.09L10.59 12L8.5 9.91L9.91 8.5L12 10.59l2.09-2.09l1.41 1.41L13.42 12z"></svg:path>`,
})
export class IcSharpGppBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
