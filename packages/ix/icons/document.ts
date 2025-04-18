import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentIcon],svg[ix-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 64h-192v384h298.667V170.667zm64 341.333H149.334V106.667h85.333v128h128zm0-213.333h-85.333v-85.333h3.626l81.707 81.706z"></svg:path>`,
})
export class IxDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
