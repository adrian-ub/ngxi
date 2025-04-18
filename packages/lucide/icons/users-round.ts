import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUsersRoundIcon],svg[lucide-users-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 21a8 8 0 0 0-16 0"></svg:path><svg:circle cx="10" cy="8" r="5"></svg:circle><svg:path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></svg:path></svg:g>`,
})
export class LucideUsersRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
