import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabCloseRoundedIcon],svg[material-symbols-tab-close-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zm8.6-9.2l1.4-1.4l1.4 1.4q.275.275.7.275t.7-.275t.275-.7t-.275-.7L15.4 10l1.4-1.4q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L14 8.6l-1.4-1.4q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.4 1.4l-1.4 1.4q-.275.275-.275.7t.275.7t.7.275t.7-.275"></svg:path>`,
})
export class MaterialSymbolsTabCloseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
