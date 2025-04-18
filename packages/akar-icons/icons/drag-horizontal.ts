import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDragHorizontalIcon],svg[akar-icons-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="20" cy="8" r="1" transform="rotate(-180 20 8)"></svg:circle><svg:circle cx="20" cy="16" r="1" transform="rotate(-180 20 16)"></svg:circle><svg:circle cx="12" cy="8" r="1" transform="rotate(-180 12 8)"></svg:circle><svg:circle cx="12" cy="16" r="1" transform="rotate(-180 12 16)"></svg:circle><svg:circle cx="4" cy="8" r="1" transform="rotate(-180 4 8)"></svg:circle><svg:circle cx="4" cy="16" r="1" transform="rotate(-180 4 16)"></svg:circle></svg:g>`,
})
export class AkarIconsDragHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
