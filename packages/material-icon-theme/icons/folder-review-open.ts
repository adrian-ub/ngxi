import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderReviewOpenIcon],svg[material-icon-theme-folder-review-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:circle cx="21" cy="21" r="3" fill="#bbdefb"></svg:circle><svg:path fill="#bbdefb" d="M21 14c-4.66 0-9.35 2.91-11 7c1.65 4.09 6.34 7 11 7s9.35-2.91 11-7c-1.65-4.09-6.34-7-11-7m0 12a5 5 0 1 1 5-5a5 5 0 0 1-5 5"></svg:path>`,
})
export class MaterialIconThemeFolderReviewOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
