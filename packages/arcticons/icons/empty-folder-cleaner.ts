import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmptyFolderCleanerIcon],svg[arcticons-empty-folder-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.196 5.5L5.632 7.987l18.024 17.907l-4.822 4.898L30.62 42.5l11.748-12.091l-11.94-11.708l-4.285 4.476z"></svg:path>`,
})
export class ArcticonsEmptyFolderCleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
