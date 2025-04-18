import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowURightBottomIcon],svg[mdi-arrow-u-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 16l-5.5 5.5l-1.42-1.41L16.17 17H10.5a6.5 6.5 0 1 1 0-13H18v2h-7.5C8 6 6 8 6 10.5S8 15 10.5 15h5.67l-3.08-3.09l1.41-1.41z"></svg:path>`,
})
export class MdiArrowURightBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
