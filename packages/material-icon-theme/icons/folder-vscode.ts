import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderVscodeIcon],svg[material-icon-theme-folder-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="m28.145 10l-7.903 7.267l-4.417-3.329L14 15.001l4.353 3.998L14 23.001l1.825 1.065l4.417-3.329L28.145 28L32 26.127V11.874ZM28 14.78v8.441l-5.603-4.22Z"></svg:path>`,
})
export class MaterialIconThemeFolderVscodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
