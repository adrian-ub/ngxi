import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftPlannerIcon],svg[arcticons-microsoft-planner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.2 29.5h10.3c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2H30.2V34c0 1.1-.9 2-2 2H17.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 23.8h12.3v16.7c0 1.1-.9 2-2 2H7.5c-1.1 0-2-.9-2-2v-33c0-1.1.9-2 2-2h22.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.8 5.5v13.2h12.35"></svg:path>`,
})
export class ArcticonsMicrosoftPlannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
