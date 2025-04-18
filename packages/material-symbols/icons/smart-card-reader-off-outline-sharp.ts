import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSmartCardReaderOffOutlineSharpIcon],svg[material-symbols-smart-card-reader-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 .7v13.5h-.7L17 12.9V2.7H6.825l-2-2zm-4.275 9.9l-2.6-2.575q.225-.575.725-.95T14 6.7q.825 0 1.413.588T16 8.7q0 .65-.35 1.163t-.925.737M8 12.75V6.7l2.95 2.95q-.175 1.425-.8 2.263t-1.575.837zM4 18.7h13.175l-1-1H4zM20.475 22l-1.3-1.3H2v-5h12.175L7 8.5v5.7H5V6.5L.7 2.2L2.1.8l19.8 19.775zM9.85 11.35"></svg:path>`,
})
export class MaterialSymbolsSmartCardReaderOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
