import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundCogIcon],svg[lucide-user-round-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14.305 19.53l.923-.382m0-2.296l-.923-.383m2.547-1.241l-.383-.923m.383 6.467l-.383.924m2.679-6.468l.383-.923m-.001 7.391l-.382-.924M2 21a8 8 0 0 1 10.434-7.62m8.338 3.472l.924-.383m-.924 2.679l.924.383"></svg:path><svg:circle cx="10" cy="8" r="5"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle></svg:g>`,
})
export class LucideUserRoundCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
