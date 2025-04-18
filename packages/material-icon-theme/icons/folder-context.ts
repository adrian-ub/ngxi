import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContextIcon],svg[material-icon-theme-folder-context-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M30 22v-2a2 2 0 0 0-2-2h-6v-2h2v-6h-6v6h2v2h-6a2 2 0 0 0-2 2v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6Z"></svg:path>`,
})
export class MaterialIconThemeFolderContextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
