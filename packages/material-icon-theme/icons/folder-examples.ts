import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExamplesIcon],svg[material-icon-theme-folder-examples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M16 14v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m2 0h2a2 2 0 0 1-2 2Zm0 4a4 4 0 0 0 4-4h2a6.005 6.005 0 0 1-6 6Zm0 8l4-4l1.6 1.6L26 20l4 6Z"></svg:path>`,
})
export class MaterialIconThemeFolderExamplesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
