import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderTestOpenIcon],svg[material-icon-theme-folder-test-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#a7ffeb" d="M16 12v2h2v12a4 4 0 0 0 8 0V14h2v-2Zm5 14a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2-4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4h-4v-4h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderTestOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
