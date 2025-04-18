import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintShareAndroidCircleFilledIcon],svg[pepicons-print-share-android-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2s12 5.373 12 12" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M8 15.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m9.754 12.18l-.508-.86l5.5-3.25l.508.86zM15 17.878l.479-.878l-5.5-3l-.479.878z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintShareAndroidCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
