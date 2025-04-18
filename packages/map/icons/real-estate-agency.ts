import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapRealEstateAgencyIcon],svg[map-real-estate-agency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.237 39.5H44.72V13.419H14.237zm15.489-23.485l10.99 9.598h-2.769v11.516h-6.436V29h-4.065v8.129H21.35V25.613h-2.84zM10.85 6.984V1.018H4.076V50h6.774V10.033h35.226V6.984z"></svg:path>`,
})
export class MapRealEstateAgencyIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
