import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoveToInboxSharpIcon],svg[material-symbols-move-to-inbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14l-4-4l1.4-1.45l1.6 1.6V6h2v4.15l1.6-1.6L16 10zm-9 7V3h18v18zm9-5q.95 0 1.725-.55T14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16"></svg:path>`,
})
export class MaterialSymbolsMoveToInboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
