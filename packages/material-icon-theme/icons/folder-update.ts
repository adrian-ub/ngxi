import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderUpdateIcon],svg[material-icon-theme-folder-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="M20 14v6.48l5.38 4.3l1.24-1.56l-4.62-3.7V14z"></svg:path><svg:path fill="#c8e6c9" d="m32 10.162l-2.898 2.821A9.984 9.984 0 1 0 31.8 22h-2.05a8.034 8.034 0 1 1-2.082-7.62L24.975 17H32Z"></svg:path>`,
})
export class MaterialIconThemeFolderUpdateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
