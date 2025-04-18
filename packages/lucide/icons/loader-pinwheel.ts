import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLoaderPinwheelIcon],svg[lucide-loader-pinwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12a1 1 0 0 1-10 0a1 1 0 0 0-10 0"></svg:path><svg:path d="M7 20.7a1 1 0 1 1 5-8.7a1 1 0 1 0 5-8.6"></svg:path><svg:path d="M7 3.3a1 1 0 1 1 5 8.6a1 1 0 1 0 5 8.6"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class LucideLoaderPinwheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
