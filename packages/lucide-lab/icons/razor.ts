import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabRazorIcon],svg[lucide-lab-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m22 11l-1.6 1.6c-.8.8-2 .8-2.8 0l-6.2-6.2c-.8-.8-.8-2 0-2.8L13 2m2.8 2.8l3.4 3.4"></svg:path><svg:path d="M17 12c-1.4 1.4-3.6 1.4-4.9 0s-1.4-3.6-.1-5"></svg:path><svg:path d="m11.1 10.1l-8.5 8.5a1.95 1.95 0 1 0 2.8 2.8l8.4-8.4"></svg:path></svg:g>`,
})
export class LucideLabRazorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
