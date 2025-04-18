import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderMetaIcon],svg[arcticons-folder-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.308c-1.025-1.651-2.268-2.914-3.701-2.914S16 23.292 16 27.734c0 3.274.883 3.872 1.822 3.872c2.42 0 4.992-5.002 6.178-7.298m0 0c1.025-1.651 2.268-2.914 3.701-2.914S32 23.292 32 27.734c0 3.274-.883 3.872-1.822 3.872c-2.42 0-4.992-5.002-6.178-7.298"></svg:path>`,
})
export class ArcticonsFolderMetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
