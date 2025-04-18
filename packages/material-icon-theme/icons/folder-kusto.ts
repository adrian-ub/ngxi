import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKustoIcon],svg[material-icon-theme-folder-kusto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M25 10c-3.878 0-7 3.122-7 7v7h7c3.878 0 7-3.122 7-7s-3.122-7-7-7m3 4h2v6h-2zm-8 2h2v4h-2zm4 2h2v2h-2zm-8 2l-3.996.02v2.322L12 24h4zm-4 6v4h4v-4zm6 0v4h4v-4z"></svg:path>`,
})
export class MaterialIconThemeFolderKustoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
