import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberManualRecordIcon],svg[material-symbols-fiber-manual-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.925 0-4.962-2.037T5 12t2.038-4.962T12 5t4.963 2.038T19 12t-2.037 4.963T12 19"></svg:path>`,
})
export class MaterialSymbolsFiberManualRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
