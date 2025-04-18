import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStarOutlineIcon],svg[zmdi-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 157L310 258l35 150l-132-80l-132 80l35-150L0 157l153-13L213 3l60 141zM213 289l81 48l-22-91l71-62l-93-8l-37-86l-36 86l-93 8l70 62l-21 91z"></svg:path>`,
})
export class ZmdiStarOutlineIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
