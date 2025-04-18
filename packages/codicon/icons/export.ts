import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconExportIcon],svg[codicon-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.086 7l-2.39-2.398l.702-.704L15 7.5l-3.602 3.602l-.703-.704l2.383-2.382V8H3V7zM1 4h1v7H1z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconExportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
