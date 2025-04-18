import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBeltIcon],svg[lucide-lab-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.3 9H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h4.3M6 6h3m4 0h.01"></svg:path><svg:rect width="10" height="8" x="7" y="2" rx="2"></svg:rect><svg:path d="M16.7 3H21c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4.3m-6.2 1l-8.1 6.2m19.2-7.4L12.2 16M3 22c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h16l3 3l-3 3Z"></svg:path></svg:g>`,
})
export class LucideLabBeltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
