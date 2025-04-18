import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCollectionIcon],svg[tdesign-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h1V2H5v2zm3 3.5H3v-2h18zM23 9v13H1V9zm-2 2H3v9h18z"></svg:path>`,
})
export class TdesignCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
