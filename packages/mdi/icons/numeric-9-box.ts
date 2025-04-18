import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9BoxIcon],svg[mdi-numeric-9-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-6 8h-2V9h2zm0-4h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric9BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
