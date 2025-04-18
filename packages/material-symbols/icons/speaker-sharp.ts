import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerSharpIcon],svg[material-symbols-speaker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5V2h14zM12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17"></svg:path>`,
})
export class MaterialSymbolsSpeakerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
