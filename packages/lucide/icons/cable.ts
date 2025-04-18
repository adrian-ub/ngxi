import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCableIcon],svg[lucide-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"></svg:path><svg:path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9m16 12v-2h-4M3 5h4V3"></svg:path><svg:path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"></svg:path></svg:g>`,
})
export class LucideCableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
