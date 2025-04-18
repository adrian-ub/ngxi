import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCoverageIcon],svg[material-icon-theme-folder-coverage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="m23.444 23.265l-3.11-3.156l1.095-1.112l2.015 2.035l5.127-5.2l1.096 1.12M25 10l-7 4v4.53A9.8 9.8 0 0 0 25 28a9.8 9.8 0 0 0 7-9.47V14Z"></svg:path>`,
})
export class MaterialIconThemeFolderCoverageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
