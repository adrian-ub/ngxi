import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHedgehogIcon],svg[lucide-lab-hedgehog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 11L3 7.7L5.7 7l.1-2.8l2.7.6l1.3-2.6L12 4l2.2-1.8l1.3 2.6l2.7-.6l.1 2.8l2.7.7l-1.2 2.5L22 12l-2.2 1.8l1.2 2.5l-3 .7m-8 0h.01"></svg:path><svg:path d="M3 16c2.8 0 5-2.2 5-5c3.3 0 6 2.7 6 6a4 4 0 0 0 4 4h-8c-1.1 0-2.6-.6-3.4-1.4zv-1"></svg:path></svg:g>`,
})
export class LucideLabHedgehogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
