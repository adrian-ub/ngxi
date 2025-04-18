import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxMultipleIcon],svg[mdi-numeric-10-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm13 8h2V7h-2zm5-12H7c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2m-9 14h-2V7H8V5h4zm8-2c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MdiNumeric10BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
