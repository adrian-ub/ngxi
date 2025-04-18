import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowDownThickIcon],svg[akar-icons-arrow-down-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l9-7h-4.99L16 3H8v11H3z"></svg:path>`,
})
export class AkarIconsArrowDownThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
