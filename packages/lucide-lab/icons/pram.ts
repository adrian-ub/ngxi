import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPramIcon],svg[lucide-lab-pram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.7 4.4L14.5 10M13 10V2a8.1 8.1 0 0 1 8 8v1c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3v-1h18M8.2 18.4l3.3-4.4"></svg:path><svg:circle cx="7" cy="20" r="2"></svg:circle><svg:path d="M15.8 18.4L5.6 4.8A1.94 1.94 0 0 0 2 6"></svg:path><svg:circle cx="17" cy="20" r="2"></svg:circle></svg:g>`,
})
export class LucideLabPramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
