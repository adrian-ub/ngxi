import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCategoryIcon],svg[nrk-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4h5v5H4zm-2 7V2h9v9zm2 4h5v5H4zm-2 7v-9h9v9zM20 4h-5v5h5zm-7-2v9h9V2zm2 13h5v5h-5zm-2 7v-9h9v9z"></svg:path>`,
})
export class NrkCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
