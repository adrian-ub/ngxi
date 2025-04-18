import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWatchImportVariantIcon],svg[mdi-watch-import-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h5L3.5 8.5l1.42-1.42L9.84 12l-4.92 4.92L3.5 15.5L6 13H1zM8 0h8l.83 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.17L16 24H8l-.83-5H7c-.54 0-1-.21-1.38-.56L7.06 17H17V7H7.06L5.62 5.56C6 5.21 6.46 5 7 5h.17z"></svg:path>`,
})
export class MdiWatchImportVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
