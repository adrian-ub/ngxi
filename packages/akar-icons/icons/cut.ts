import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCutIcon],svg[akar-icons-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="7" cy="18" r="3"></svg:circle><svg:path d="M15 15L7 3m2 12l3-4.5M17 3l-3 4.5"></svg:path><svg:circle cx="17" cy="18" r="3"></svg:circle></svg:g>`,
})
export class AkarIconsCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
