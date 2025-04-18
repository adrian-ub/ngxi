import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabToiletRollIcon],svg[lucide-lab-toilet-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="10" cy="8" rx="3" ry="2"></svg:ellipse><svg:ellipse cx="10" cy="8" rx="7" ry="6"></svg:ellipse><svg:path d="M3 8v8c0 3.3 3.1 6 7 6s7-2.7 7-6V8c0 2.2 2.2 4 5 4v8c-2.8 0-5-1.8-5-4m-7-2v2m0 4v2"></svg:path></svg:g>`,
})
export class LucideLabToiletRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
