import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsGlobeIcon],svg[grommet-icons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 8s3.5 1 5 2s.564 2.42 1 3s2-1 2 2s3 1 3 4s2.5 2.5 3 1s2.233-3.134 2-5s-1-3-3-3s-3.5-.5-4-2s3-2 2-5s0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Z"></svg:path>`,
})
export class GrommetIconsGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
