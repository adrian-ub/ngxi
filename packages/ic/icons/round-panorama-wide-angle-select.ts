import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPanoramaWideAngleSelectIcon],svg[ic-round-panorama-wide-angle-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-3.97 0-6.85.63-9 1c-.55 1.97-1 3.92-1 7c0 3.03.45 5.06 1 7c2.15.37 4.98 1 9 1c3.97 0 6.85-.63 9-1c.57-2.02 1-3.99 1-7c0-3.03-.45-5.06-1-7c-2.15-.37-4.98-1-9-1"></svg:path>`,
})
export class IcRoundPanoramaWideAngleSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
