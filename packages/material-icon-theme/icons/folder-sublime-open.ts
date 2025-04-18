import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderSublimeOpenIcon],svg[material-icon-theme-folder-sublime-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffa726" d="M32 15.833v-2.946a.5.5 0 0 0-.658-.474l-11 3.666a.5.5 0 0 0-.342.475v3.279a.5.5 0 0 0 .342.474L26 22.193l-5.658 1.886a.5.5 0 0 0-.342.475V27.5a.5.5 0 0 0 .658.474l11-3.667a.5.5 0 0 0 .342-.474v-3.28a.5.5 0 0 0-.342-.474L26 18.193l5.658-1.886a.5.5 0 0 0 .342-.474"></svg:path>`,
})
export class MaterialIconThemeFolderSublimeOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
