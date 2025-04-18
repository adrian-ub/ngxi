import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKodaForKustomIcon],svg[arcticons-koda-for-kustom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.292 8.516l.045 21.515c.013 6.03-6.487 12.561-13.864 12.468c-1.815-.023-2.93-1.211-2.926-3.196l.045-21.605c.015-6.882 6.004-12.18 13.954-12.198c1.89-.004 2.743 1.478 2.746 3.016"></svg:path><svg:circle cx="35.864" cy="35.657" r="6.299" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.453 5.554h-8.467c-3.02 0-4.76 2.236-4.742 5.252v10.589c.029 4.881 13.209-2.932 13.209-9.666z"></svg:path>`,
})
export class ArcticonsKodaForKustomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
