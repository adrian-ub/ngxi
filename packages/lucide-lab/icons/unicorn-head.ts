import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabUnicornHeadIcon],svg[lucide-lab-unicorn-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15.6 4.8l2.7 2.3M15.5 10S19 7 22 2c-6 2-10 5-10 5m-.5 5H11"></svg:path><svg:path d="M5 15a4 4 0 0 0 4 4h7.8l.3.3a3 3 0 0 0 4-4.46L12 7c0-3-1-5-1-5S8 3 8 7c-4 1-6 3-6 3"></svg:path><svg:path d="M2 4.5C4 3 6 3 6 3l2 4M6.14 17.8S4 19 2 22"></svg:path></svg:g>`,
})
export class LucideLabUnicornHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
