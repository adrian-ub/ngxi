import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlowerRoseSingleIcon],svg[lucide-lab-flower-rose-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 9.52a4.04 4.04 0 1 1 2-3.47"></svg:path><svg:circle cx="17" cy="7.8" r="2"></svg:circle><svg:path d="m14 2.5l-2 1.3a6 6 0 1 0 6 10.4l2-1.2a4 4 0 0 0-4-6.95"></svg:path><svg:path d="M9.77 12C4 15 2 22 2 22"></svg:path><svg:path d="M13 20s-5 3-9.2-2c0 0 5.2-3 9.2 2"></svg:path></svg:g>`,
})
export class LucideLabFlowerRoseSingleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
