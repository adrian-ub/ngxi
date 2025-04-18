import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsToggleOffIcon],svg[akar-icons-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="10" x="2" y="7" rx="5"></svg:rect><svg:circle cx="7" cy="12" r="5"></svg:circle></svg:g>`,
})
export class AkarIconsToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
