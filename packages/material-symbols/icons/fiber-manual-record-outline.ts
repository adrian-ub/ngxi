import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberManualRecordOutlineIcon],svg[material-symbols-fiber-manual-record-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.9 0-4.95-2.05T5 12t2.05-4.95T12 5t4.95 2.05T19 12t-2.05 4.95T12 19m0-2q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"></svg:path>`,
})
export class MaterialSymbolsFiberManualRecordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
