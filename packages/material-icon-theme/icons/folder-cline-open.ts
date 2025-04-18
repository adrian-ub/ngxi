import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClineOpenIcon],svg[material-icon-theme-folder-cline-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M23 12a2 2 0 0 0-2 2h-1c-2.216 0-4 1.784-4 4l-2 3l2 3c0 2.216 1.784 4 4 4h6c2.216 0 4-1.784 4-4l2-3l-2-3c0-2.216-1.784-4-4-4h-1a2 2 0 0 0-2-2m-2 6c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1m4 0c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1"></svg:path>`,
})
export class MaterialIconThemeFolderClineOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
