import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabDoorbellIntercomIcon],svg[lucide-lab-doorbell-intercom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.8 4a2.9 2.9 0 0 0-5.6 0H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h4.2a2.9 2.9 0 0 0 5.6 0H19c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1ZM8 8h.01M12 8h.01M16 8h.01"></svg:path><svg:circle cx="12" cy="14" r="2"></svg:circle></svg:g>`,
})
export class LucideLabDoorbellIntercomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
