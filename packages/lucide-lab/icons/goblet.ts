import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGobletIcon],svg[lucide-lab-goblet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 2c-1.78 2.72-3 6.65-3 9a7 7 0 1 0 14 0c0-2.35-1.22-6.28-3-9Zm4 16v4m-4 0h8"></svg:path><svg:path d="M5 11c.84-.5 1.68-1 3.5-1c3.5 0 3.5 2 7 2c1.82 0 2.66-.5 3.5-1"></svg:path></svg:g>`,
})
export class LucideLabGobletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
