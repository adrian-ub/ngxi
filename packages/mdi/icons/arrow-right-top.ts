import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowRightTopIcon],svg[mdi-arrow-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 8l-5.5 5.5l-1.41-1.41L16.17 9H10.5C8 9 6 11 6 13.5V20H4v-6.5A6.5 6.5 0 0 1 10.5 7h5.67l-3.09-3.09L14.5 2.5z"></svg:path>`,
})
export class MdiArrowRightTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
