import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSausageIcon],svg[lucide-lab-sausage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 19a3 3 0 1 1-6 0A11 11 0 0 0 5 8a3 3 0 1 1 0-6a17 17 0 0 1 17 17m-9.2-7.8L2 22"></svg:path><svg:path d="m9.2 8.8l-2.5 2.5a3.1 3.1 0 0 0 0 4.2l1.8 1.8a3.1 3.1 0 0 0 4.2 0l2.5-2.5"></svg:path></svg:g>`,
})
export class LucideLabSausageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
