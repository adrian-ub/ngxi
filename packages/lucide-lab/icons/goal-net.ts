import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGoalNetIcon],svg[lucide-lab-goal-net-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14M8 8v12m4-12v12m4-12v12M6 10h12M6 14h12M6 18h12"></svg:path>`,
})
export class LucideLabGoalNetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
