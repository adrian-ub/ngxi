import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceGlobeIcon],svg[guidance-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M23 12c0-6.075-4.925-11-11-11m11 11c0 6.075-4.925 11-11 11m11-11c0 2.21-4.925 4-11 4S1 14.21 1 12M12 1C5.925 1 1 5.925 1 12M12 1c2.761 0 5 4.925 5 11s-2.239 11-5 11m0-22C9.239 1 7 5.925 7 12s2.239 11 5 11M1 12c0 6.075 4.925 11 11 11"></svg:path>`,
})
export class GuidanceGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
