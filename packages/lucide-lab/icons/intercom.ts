import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabIntercomIcon],svg[lucide-lab-intercom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="2"></svg:rect><svg:path d="M6 9v6m4-9v12m4-12v12m4-9v6"></svg:path></svg:g>`,
})
export class LucideLabIntercomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
