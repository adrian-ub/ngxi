import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabShortsBoxerIcon],svg[lucide-lab-shorts-boxer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.7 15.8L9 20H4a2 2 0 0 1-2-2V5c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v13a2 2 0 0 1-2 2h-5l-1.7-4.2M2 8h20"></svg:path><svg:path d="M16 8v4a4 4 0 0 1-8 0V8"></svg:path></svg:g>`,
})
export class LucideLabShortsBoxerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
