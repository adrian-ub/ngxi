import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontaSpacingBrokenIcon],svg[solar-align-horizonta-spacing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 2v20m18-12v12m0-20v4M8 15v1c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v3"></svg:path>`,
})
export class SolarAlignHorizontaSpacingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
