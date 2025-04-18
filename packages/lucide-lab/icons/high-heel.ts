import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHighHeelIcon],svg[lucide-lab-high-heel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 3c6 6 8.4 10.5 9.8 12c.9 1 2.5 1.3 3.7.6c.3-.2.5-.3.7-.6c.6.3 3.8 3.1 3.8 5c0 1-1 1-1 1h-7c-1 0-2-.5-2.6-1.5L10.1 17c-.9-1.6-2.2-3-3.7-4.2L4 11a5 5 0 0 1 0-8"></svg:path><svg:path d="m2.56 9.3l.6 1.1C4.2 12.6 5 16.5 5 21"></svg:path></svg:g>`,
})
export class LucideLabHighHeelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
