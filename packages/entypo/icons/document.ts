import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoDocumentIcon],svg[entypo-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m-1 16H5V3h10z" clip-rule="evenodd"></svg:path>`,
})
export class EntypoDocumentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
