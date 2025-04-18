import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDetectorOfflineOutlineRoundedIcon],svg[material-symbols-detector-offline-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.4l-1.9 1.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l1.9-1.9l-1.9-1.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.9 1.9l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 17l1.9 1.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm.3 3q-.65 0-1.175-.387T6.5 9.6L6 8H5q-.825 0-1.412-.587T3 6V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v1q0 .825-.587 1.413T19 8h-1l-.65 1.7q-.225.575-.725.938T15.5 11zM5 5v1z"></svg:path>`,
})
export class MaterialSymbolsDetectorOfflineOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
