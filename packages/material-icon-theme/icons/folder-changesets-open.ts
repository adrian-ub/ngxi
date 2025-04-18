import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderChangesetsOpenIcon],svg[material-icon-theme-folder-changesets-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M14.003 14a6.68 6.68 0 0 0 6.335 6.98h1.9a6.62 6.62 0 0 0-6.238 7h1.172A6.36 6.36 0 0 0 23 23.73a6.36 6.36 0 0 0 5.828 4.25H30a6.62 6.62 0 0 0-6.239-7h1.901A6.68 6.68 0 0 0 31.997 14h-3.169A6.34 6.34 0 0 0 23 18.23A6.34 6.34 0 0 0 17.172 14ZM23 18.234a7.7 7.7 0 0 1 0 5.493a7.7 7.7 0 0 1 0-5.493"></svg:path>`,
})
export class MaterialIconThemeFolderChangesetsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
