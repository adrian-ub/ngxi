import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSaveIcon],svg[codicon-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13zM2 2v12h12V3.208L12.793 2H11v4H4V2zm6 0v3h2V2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSaveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
