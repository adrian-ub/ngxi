import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabRazorBladeIcon],svg[lucide-lab-razor-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 8h-2V6H4v2H2v8h2v2h16v-2h2ZM6 11v2m4-1H6"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M18 12h-4m4-1v2"></svg:path></svg:g>`,
})
export class LucideLabRazorBladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
