import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCoffeemakerIcon],svg[lucide-lab-coffeemaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 22V12a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18H2"></svg:path><svg:path d="M10 2v2a2 2 0 1 1-4 0V2m16 4h-4m4 4h-4m0 12v-6a2 2 0 0 1 2-2h2M7 10v2m0 10c-1.7 0-3-1.3-3-3v-3h6v3c0 1.7-1.3 3-3 3m-5-4a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class LucideLabCoffeemakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
