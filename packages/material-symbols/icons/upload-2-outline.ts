import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUpload2OutlineIcon],svg[material-symbols-upload-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-2h16v2zm5-4v-7H5l7-9l7 9h-4v7zm2-2h2V9h1.9L12 5.25L9.1 9H11zm1-7"></svg:path>`,
})
export class MaterialSymbolsUpload2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
