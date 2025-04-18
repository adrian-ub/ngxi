import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabChameleonIcon],svg[lucide-lab-chameleon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 22c-5 0-9-4.5-9-10S6 2 11 2c2.2 0 4.2.9 5.7 2.3L19.3 2c3.1 3.1 3.5 7.9 1.3 11.4c-.6.9-1.9.9-2.7.1l-1.2-1.2C15.2 10.9 13.2 10 11 10a6 6 0 0 0 0 12a4 4 0 0 0 0-8a2 2 0 0 0 0 4m3-11h.01"></svg:path><svg:circle cx="14.5" cy="7" r="3.5"></svg:circle><svg:path d="M8 10.8L6 10l1-2m15 14a2 2 0 0 1-2-2v-6.1"></svg:path></svg:g>`,
})
export class LucideLabChameleonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
