import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHamburgerIcon],svg[lucide-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25M5 12a2 2 0 0 1-2-2a9 7 0 0 1 18 0a2 2 0 0 1-2 2M5 16a2 2 0 0 0-2 2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a2 2 0 0 0-2-2q0 0 0 0"></svg:path><svg:path d="m6.67 12l6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"></svg:path></svg:g>`,
})
export class LucideHamburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
