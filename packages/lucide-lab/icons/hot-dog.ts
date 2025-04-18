import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHotDogIcon],svg[lucide-lab-hot-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.1 3.5a4 4 0 0 0-5.9-.3l-8 8a4 4 0 0 0 .2 5.9m3.5 3.6a4.07 4.07 0 0 0 5.9.1l8-8a4 4 0 0 0-.1-5.9"></svg:path><svg:path d="M21.3 6.3a2.5 2.5 0 0 0-3.5-3.5l-15 15a2.5 2.5 0 0 0 3.5 3.5Z"></svg:path></svg:g>`,
})
export class LucideLabHotDogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
