import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMusic3Icon],svg[lucide-music-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="18" r="4"></svg:circle><svg:path d="M16 18V2"></svg:path></svg:g>`,
})
export class LucideMusic3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
