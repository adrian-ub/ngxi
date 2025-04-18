import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderScalaOpenIcon],svg[material-icon-theme-folder-scala-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M18 26v4c2.281-.781 8.713-1.025 10-2v-4c-1.287.975-7.719 1.219-10 2m0-6v4c2.281-.781 8.713-1.025 10-2v-4c-1.287.975-7.719 1.219-10 2m0-6v4c2.281-.781 8.713-1.025 10-2v-4c-1.287.975-7.719 1.219-10 2"></svg:path>`,
})
export class MaterialIconThemeFolderScalaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
