import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUndoRightRoundBoldDuotoneIcon],svg[solar-undo-right-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L18.94 7l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.19 6.25H9a5.75 5.75 0 0 0 0 11.5h7a.75.75 0 0 0 0-1.5H9a4.25 4.25 0 0 1 0-8.5h9.19l.75-.75z" opacity=".5"></svg:path>`,
})
export class SolarUndoRightRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
