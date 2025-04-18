import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBullHeadIcon],svg[lucide-lab-bull-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 10a5 5 0 0 1-4-8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4a5 5 0 0 1-4 8"></svg:path><svg:path d="M6.4 15c-.3-.6-.4-1.3-.4-2c0-4 3-3 3-7m1 6.5v1.6m7.6.9c.3-.6.4-1.3.4-2c0-4-3-3-3-7m-1 6.5v1.6"></svg:path><svg:path d="M15 22a4 4 0 1 0-3-6.7A4 4 0 1 0 9 22Zm-6-4h.01M15 18h.01"></svg:path></svg:g>`,
})
export class LucideLabBullHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
