import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderVuepressOpenIcon],svg[material-icon-theme-folder-vuepress-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#41b883" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#e8f5e9" d="M18.4 12a2.23 2.23 0 0 0-2.4 2v12a2.23 2.23 0 0 0 2.4 2h11.2a2.23 2.23 0 0 0 2.4-2V14a2.23 2.23 0 0 0-2.4-2Z"></svg:path><svg:path fill="#41b883" d="m18 16l6 10l6-9.952V16h-2.333l-3.632 6.026L20.42 16Z"></svg:path><svg:path fill="#35495e" d="m20.418 16l3.616 6.026L27.667 16h-2.188l-1.43 2.372L22.625 16Z"></svg:path>`,
})
export class MaterialIconThemeFolderVuepressOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
