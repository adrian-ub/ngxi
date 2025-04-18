import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDescendingIcon],svg[akar-icons-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 21V3m0 18l3-3.333M6 21l-3-3.333"></svg:path><svg:path stroke-miterlimit="5.759" d="M14 3h8l-1 4h-7zm0 7h6l-1 4h-5zm0 7h4l-1 4h-3z"></svg:path></svg:g>`,
})
export class AkarIconsDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
