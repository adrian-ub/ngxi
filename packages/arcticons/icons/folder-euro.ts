import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderEuroIcon],svg[arcticons-folder-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.01 32.588a5.35 5.35 0 0 1-4.107 1.912h0a5.365 5.365 0 0 1-5.365-5.365v-5.27a5.365 5.365 0 0 1 5.365-5.365h0c1.658 0 3.14.752 4.124 1.933m-12.054 4.123h6.775m-6.775 3.926h6.775"></svg:path>`,
})
export class ArcticonsFolderEuroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
