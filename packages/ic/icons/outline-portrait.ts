import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlinePortraitIcon],svg[ic-outline-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1zM19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path>`,
})
export class IcOutlinePortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
