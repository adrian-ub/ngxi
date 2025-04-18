import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabVolleyballIcon],svg[lucide-lab-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5M20.7 17a12.8 12.8 0 0 0-8.7-5a13.3 13.3 0 0 1 0-10"></svg:path><svg:path d="M22 11.1c-.8-.6-1.7-1.3-2.6-1.8c-3-1.7-6.1-2.5-8.3-2.2m-3.3 14c1-.4 1.9-.8 2.9-1.4c3-1.7 5.2-4 6.1-6.1M12 12a12.6 12.6 0 0 1-8.7 5"></svg:path></svg:g>`,
})
export class LucideLabVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
