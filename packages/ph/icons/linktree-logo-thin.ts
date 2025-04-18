import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoThinIcon],svg[ph-linktree-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 160v72a4 4 0 0 1-8 0v-72a4 4 0 0 1 8 0m76-60h-70.34l49.17-49.17a4 4 0 1 0-5.66-5.66L132 94.34V24a4 4 0 0 0-8 0v70.34L74.83 45.17a4 4 0 0 0-5.66 5.66L118.34 100H48a4 4 0 0 0 0 8h70.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L128 109.66l53.17 53.17a4 4 0 0 0 5.66-5.66L137.66 108H208a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhLinktreeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
