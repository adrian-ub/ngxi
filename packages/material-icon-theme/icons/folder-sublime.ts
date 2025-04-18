import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderSublimeIcon],svg[material-icon-theme-folder-sublime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffa726" d="M32 15.833v-2.946a.5.5 0 0 0-.658-.474l-11 3.666a.5.5 0 0 0-.342.475v3.279a.5.5 0 0 0 .342.474L26 22.193l-5.658 1.886a.5.5 0 0 0-.342.475V27.5a.5.5 0 0 0 .658.474l11-3.667a.5.5 0 0 0 .342-.474v-3.28a.5.5 0 0 0-.342-.474L26 18.193l5.658-1.886a.5.5 0 0 0 .342-.474"></svg:path>`,
})
export class MaterialIconThemeFolderSublimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
