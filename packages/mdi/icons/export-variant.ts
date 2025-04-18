import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExportVariantIcon],svg[mdi-export-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L8 5h3v9h2V5h3m2 18H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3v2H6v12h12V9h-3V7h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiExportVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
