import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTargetIcon],svg[grommet-icons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-5 0c0-3.309-2.691-6-6-6s-6 2.691-6 6s2.691 6 6 6s6-2.691 6-6Zm-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"></svg:path>`,
})
export class GrommetIconsTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
