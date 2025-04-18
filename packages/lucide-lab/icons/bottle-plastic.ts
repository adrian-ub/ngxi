import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBottlePlasticIcon],svg[lucide-lab-bottle-plastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6.1V3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3.1"></svg:path><svg:path d="M17 14.5c0-1.2-.9-2.2-2-2.4V12a2 2 0 0 0 2-2a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4a2 2 0 0 0 2 2v.1a2.5 2.5 0 0 0 0 4.8v.1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2v-.1c1.1-.2 2-1.2 2-2.4"></svg:path></svg:g>`,
})
export class LucideLabBottlePlasticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
