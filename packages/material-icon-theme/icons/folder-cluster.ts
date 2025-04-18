import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClusterIcon],svg[material-icon-theme-folder-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:circle cx="21" cy="15" r="3" fill="#b2dfdb"></svg:circle><svg:circle cx="17" cy="23" r="3" fill="#b2dfdb"></svg:circle><svg:circle cx="27" cy="27" r="3" fill="#b2dfdb"></svg:circle>`,
})
export class MaterialIconThemeFolderClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
