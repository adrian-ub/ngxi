import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRouteOffIcon],svg[lucide-route-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3"></svg:path><svg:circle cx="18" cy="5" r="3"></svg:circle></svg:g>`,
})
export class LucideRouteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
