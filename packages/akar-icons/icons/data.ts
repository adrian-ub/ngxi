import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDataIcon],svg[akar-icons-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="6" rx="8" ry="3"></svg:ellipse><svg:path d="M6.037 12C4.77 12.53 4 13.232 4 14c0 1.657 3.582 3 8 3s8-1.343 8-3c0-.768-.77-1.47-2.037-2"></svg:path><svg:path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4"></svg:path></svg:g>`,
})
export class AkarIconsDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
