import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowDownLeftIcon],svg[mdi-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v2h-6.5C11 6 9 8 9 10.5v5.67l3.09-3.08l1.41 1.41L8 20l-5.5-5.5l1.41-1.42L7 16.17V10.5A6.5 6.5 0 0 1 13.5 4z"></svg:path>`,
})
export class MdiArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
