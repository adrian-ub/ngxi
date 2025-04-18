import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileSpeakerOutlineIcon],svg[material-symbols-mobile-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V4zm0 2q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h9q.825 0 1.413.588T16 4v2.675l-2 2V4H5v16h5.675l2 2zm4-4v-4h2.5l3.5-3.5v11L11.5 18zm8 .8v-5.625q.875.3 1.438 1.075T19 16t-.562 1.738T17 18.8m0 4.125v-2q1.75-.375 2.875-1.75T21 16t-1.125-3.175T17 11.1v-2q2.6.35 4.3 2.313T23 16t-1.7 4.588t-4.3 2.337M9.5 7q.425 0 .713-.288T10.5 6t-.288-.712T9.5 5t-.712.288T8.5 6t.288.713T9.5 7"></svg:path>`,
})
export class MaterialSymbolsMobileSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
