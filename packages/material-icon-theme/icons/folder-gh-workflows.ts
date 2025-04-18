import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGhWorkflowsIcon],svg[material-icon-theme-folder-gh-workflows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#eceff1" d="M24 22v2h-2a2 2 0 0 1-2-2v-4h2v-6h-6v6h2v4a4.004 4.004 0 0 0 4 4h2v2h6v-6Zm-6-6v-2h2v2Zm10 10h-2v-2h2Z"></svg:path>`,
})
export class MaterialIconThemeFolderGhWorkflowsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
