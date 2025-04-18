import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarHalfIcon],svg[mdi-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z"></svg:path>`,
})
export class MdiStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
