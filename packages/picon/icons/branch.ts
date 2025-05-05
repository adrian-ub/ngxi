import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBranchIcon],svg[picon-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v4h1V2M1 1v6h1V1m3 2V0h3v3M3 5v3H0V5m0-2V0h3v3m3-1h1V1H6m0 2h1L3 7V6"></svg:path>`,
})
export class PiconBranchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
