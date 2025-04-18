import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDragVerticalIcon],svg[akar-icons-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="8" cy="4" r="1" transform="rotate(90 8 4)"></svg:circle><svg:circle cx="16" cy="4" r="1" transform="rotate(90 16 4)"></svg:circle><svg:circle cx="8" cy="12" r="1" transform="rotate(90 8 12)"></svg:circle><svg:circle cx="16" cy="12" r="1" transform="rotate(90 16 12)"></svg:circle><svg:circle cx="8" cy="20" r="1" transform="rotate(90 8 20)"></svg:circle><svg:circle cx="16" cy="20" r="1" transform="rotate(90 16 20)"></svg:circle></svg:g>`,
})
export class AkarIconsDragVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
