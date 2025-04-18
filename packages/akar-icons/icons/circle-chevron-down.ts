import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCircleChevronDownIcon],svg[akar-icons-circle-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 10.5l4 4l4-4"></svg:path></svg:g>`,
})
export class AkarIconsCircleChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
