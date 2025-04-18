import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFolderMinusIcon],svg[ci-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a1 1 0 0 1 .707.293L12.414 5H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 7v12h16V7H4Zm12 7H8v-2h8v2Z"></svg:path>`,
})
export class CiFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
