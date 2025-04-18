import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderVerdaccioIcon],svg[material-icon-theme-folder-verdaccio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="m14 12.001l7.765 16h2.536l4.852-10h-4.337l-1.78 4L18.339 12Z"></svg:path><svg:path fill="#ffcdd2" d="M25.764 12.001v.927h1.732l-.285.584h-2.833v.922h2.377l-.338.696h-3.394v.871h7.04L32 12.016h-.765V12Z"></svg:path>`,
})
export class MaterialIconThemeFolderVerdaccioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
