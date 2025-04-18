import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSaveAllIcon],svg[codicon-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.85 2.65l-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3zM11 14H2V5h1v3.07h6V5h.79L11 6.21zM6 7V5h2v2zm8 4h-2V6l-.15-.35l-1.5-1.5L10 4H5V2h7.81l1.21 1.21z"></svg:path>`,
})
export class CodiconSaveAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
