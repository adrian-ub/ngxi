import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBuildkiteOpenIcon],svg[material-icon-theme-folder-buildkite-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="m20 24l-6-2v-6l6 2zm10-2h-4v-6l6 4z"></svg:path><svg:path fill="#a5d6a7" d="m20 24l6-2v-6l-6 2zm6 4l6-2v-6l-6 2z"></svg:path>`,
})
export class MaterialIconThemeFolderBuildkiteOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
