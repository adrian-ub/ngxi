import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditFadeIcon],svg[gg-edit-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-opacity=".3" stroke-width="4" d="M8 12c0-1.48.804-2.773 2-3.465v6.93A4 4 0 0 1 8 12Z"></svg:path><svg:path stroke-opacity=".6" stroke-width="4" d="M14 15.465v-6.93c1.196.692 2 1.984 2 3.465s-.804 2.773-2 3.465Z"></svg:path><svg:path stroke-width="2" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0Z"></svg:path></svg:g>`,
})
export class GgEditFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
