import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoDocumentLandscapeIcon],svg[entypo-document-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 12H2V5h16z"></svg:path>`,
})
export class EntypoDocumentLandscapeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
