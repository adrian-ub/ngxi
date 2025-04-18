import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowRepeatIcon],svg[akar-icons-arrow-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 2l3 3l-3 3M6 22l-3-3l3-3"></svg:path><svg:path d="M21 5H10a7 7 0 0 0-7 7m0 7h11a7 7 0 0 0 7-7"></svg:path></svg:g>`,
})
export class AkarIconsArrowRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
