import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxMultipleOutlineIcon],svg[mdi-numeric-10-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V3H7v14zm0-16a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm9 0H8v2h2v8h2zm6 0h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2m0 8h-2V7h2z"></svg:path>`,
})
export class MdiNumeric10BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
