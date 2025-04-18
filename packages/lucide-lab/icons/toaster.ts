import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabToasterIcon],svg[lucide-lab-toaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 10V5.7A2 2 0 0 0 15 2H9a2 2 0 0 0-1 3.7V10m-2 0h12"></svg:path><svg:path d="M4 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></svg:path><svg:circle cx="8" cy="16" r="2"></svg:circle><svg:path d="M14 16h4m-2-2v8"></svg:path></svg:g>`,
})
export class LucideLabToasterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
