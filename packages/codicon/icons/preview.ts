import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPreviewIcon],svg[codicon-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h12l1 1v10l-1 1H2l-1-1V3zm0 11h12V3H2zm11-9H3v3h10zm-1 2H4V5h8zm-3 6h4V8H9zm1-3h2v2h-2zM7 8H3v1h4zm-4 3h4v1H3z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconPreviewIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
