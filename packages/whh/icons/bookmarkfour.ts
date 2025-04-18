import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkfourIcon],svg[whh-bookmarkfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991 703H703v288q0 22-27 30.5t-40-5.5L26 406Q0 380 0 343t26-63L280 26q26-26 63-26t63 26l610 610q14 13 5.5 40T991 703M448 224l-89 68l-108-41l41 108l-68 89l115-1l77 96V416h127l-96-77z"></svg:path>`,
})
export class WhhBookmarkfourIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
