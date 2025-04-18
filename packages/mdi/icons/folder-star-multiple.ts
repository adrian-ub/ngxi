import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarMultipleIcon],svg[mdi-folder-star-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H0v14c0 1.11.895 2 2 2h18v-2H2zm20-2h-8l-2-2H6c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.11-.89-2-2-2m-2.06 11L17 13.27L14.06 15l.78-3.34l-2.59-2.24l3.41-.29L17 6l1.34 3.13l3.41.29l-2.59 2.24z"></svg:path>`,
})
export class MdiFolderStarMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
