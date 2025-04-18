import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCancelPresentationRoundedIcon],svg[material-symbols-cancel-presentation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.6 12l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l1.9-1.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsCancelPresentationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
