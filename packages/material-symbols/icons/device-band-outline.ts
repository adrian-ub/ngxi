import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeviceBandOutlineIcon],svg[material-symbols-device-band-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-.825 0-1.412-.587T8 20V9q-.425 0-.712-.288T7 8V7q0-.425.288-.712T8 6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2q.425 0 .713.288T17 7v1q0 .425-.288.713T16 9v11q0 .825-.587 1.413T14 22zm0-13.5V20h4V8.5zm0-2h4V4h-4zm0 2h4zm0-2h4z"></svg:path>`,
})
export class MaterialSymbolsDeviceBandOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
