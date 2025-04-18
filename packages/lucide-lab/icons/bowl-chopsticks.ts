import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBowlChopsticksIcon],svg[lucide-lab-bowl-chopsticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 2l-3 11M22 2l-8 11"></svg:path><svg:ellipse cx="12" cy="12" rx="10" ry="5"></svg:ellipse><svg:path d="M22 12a10 10 0 0 1-20 0"></svg:path></svg:g>`,
})
export class LucideLabBowlChopsticksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
