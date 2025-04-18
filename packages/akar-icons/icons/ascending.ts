import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAscendingIcon],svg[akar-icons-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3v18M6 3l3 3.333M6 3L3 6.333"></svg:path><svg:path stroke-miterlimit="5.759" d="M14 21h8l-1-4h-7zm0-7h6l-1-4h-5zm0-7h4l-1-4h-3z"></svg:path></svg:g>`,
})
export class AkarIconsAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
