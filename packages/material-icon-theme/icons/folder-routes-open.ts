import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderRoutesOpenIcon],svg[material-icon-theme-folder-routes-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="M17.414 14.586L20 12h-8v8l2.586-2.586l4.91 4.91A1.7 1.7 0 0 1 20 23.541V28h4v-4.459a5.68 5.68 0 0 0-1.676-4.045ZM29.36 12l-5.61 4.93l.57.57a5.6 5.6 0 0 1 1.56 2.89L32 15.01Z"></svg:path>`,
})
export class MaterialIconThemeFolderRoutesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
