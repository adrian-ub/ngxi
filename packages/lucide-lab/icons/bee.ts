import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBeeIcon],svg[lucide-lab-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 2l1.88 1.88m4.24 0L16 2M9 7V6a3 3 0 1 1 6 0v1M5 7a3 3 0 1 0 2.2 5.1C9.1 10 12 7 12 7s2.9 3 4.8 5.1A3 3 0 1 0 19 7Zm2.56 5h8.87M7.5 17h9"></svg:path><svg:path d="M15.5 10.7c.9.9 1.4 2.1 1.5 3.3c0 5.8-5 8-5 8s-5-2.2-5-8c.1-1.2.6-2.4 1.5-3.3"></svg:path></svg:g>`,
})
export class LucideLabBeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
