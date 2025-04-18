import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAppWindowIcon],svg[lucide-app-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:path d="M10 4v4M2 8h20M6 4v4"></svg:path></svg:g>`,
})
export class LucideAppWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
