import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStarHalfIcon],svg[zmdi-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 160L310 261l35 150l-132-80l-132 80l35-150L0 160l153-13L213 5l60 142zM213 291l81 49l-22-91l71-62l-93-8l-37-86z"></svg:path>`,
})
export class ZmdiStarHalfIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
