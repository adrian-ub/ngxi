import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderWebpackOpenIcon],svg[material-icon-theme-folder-webpack-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#FAFAFA" d="m30.992 14.263l-7-4a2 2 0 0 0-1.984 0l-7 4A2 2 0 0 0 14 16v8.65a2 2 0 0 0 1.025 1.746l6 3.35A2 2 0 0 0 23 29.73a2 2 0 0 0 1.975.016l6-3.35A2 2 0 0 0 32 24.65V16a2 2 0 0 0-1.008-1.737"></svg:path><svg:path fill="#0277bd" d="M30 24.65L24 28v-6l6-3.35zM23 12l-7 4l7 4l7-4zm-7 12.65L22 28v-6l-6-3.35z"></svg:path>`,
})
export class MaterialIconThemeFolderWebpackOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
