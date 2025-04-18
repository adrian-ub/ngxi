import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkthreeIcon],svg[whh-bookmarkthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991 703H703v288q0 22-27 30.5t-40-5.5L26 406Q0 380 0 343t26-63L280 26q26-26 63-26t63 26l610 610q14 13 6 40t-31 27"></svg:path>`,
})
export class WhhBookmarkthreeIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
