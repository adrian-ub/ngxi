import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTextDocumentInvertedIcon],svg[entypo-text-document-inverted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m-3 14H7v-2h6zm0-4H7V9h6zm0-4H7V5h6z" clip-rule="evenodd"></svg:path>`,
})
export class EntypoTextDocumentInvertedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
