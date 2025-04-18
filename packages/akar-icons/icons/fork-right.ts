import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsForkRightIcon],svg[akar-icons-fork-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 3v18M9 3l4 4M9 3L5 7m11 3l4 4l-4 4"></svg:path><svg:path d="M9 21a7 7 0 0 1 7-7h4"></svg:path></svg:g>`,
})
export class AkarIconsForkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
