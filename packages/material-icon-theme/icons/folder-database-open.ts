import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDatabaseOpenIcon],svg[material-icon-theme-folder-database-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:ellipse cx="24" cy="14" fill="#ffecb3" rx="8" ry="4"></svg:ellipse><svg:path fill="#ffecb3" d="M24 26c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></svg:path><svg:path fill="#ffecb3" d="M24 20c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></svg:path>`,
})
export class MaterialIconThemeFolderDatabaseOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
