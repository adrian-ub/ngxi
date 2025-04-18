import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUDownLeftIcon],svg[mdi-arrow-u-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.5V18h-2v-7.5C18 8 16 6 13.5 6S9 8 9 10.5v5.67l3.09-3.08l1.41 1.41L8 20l-5.5-5.5l1.41-1.42L7 16.17V10.5a6.5 6.5 0 1 1 13 0"></svg:path>`,
})
export class MdiArrowUDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
