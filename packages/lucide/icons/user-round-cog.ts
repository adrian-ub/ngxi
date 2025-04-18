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
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 21a8 8 0 0 1 10.434-7.62"></svg:path><svg:circle cx="10" cy="8" r="5"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path d="m19.5 14.3l-.4.9m-2.2 5.6l-.4.9m5.2-2.2l-.9-.4m-5.6-2.2l-.9-.4m7.4 0l-.9.4m-5.6 2.2l-.9.4m5.2 2.2l-.4-.9m-2.2-5.6l-.4-.9"></svg:path></svg:g>`,
})
export class LucideUserRoundCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
