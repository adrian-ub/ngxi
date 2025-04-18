import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRobotIcon],svg[meteor-icons-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="14" x="2" y="9" rx="4"></svg:rect><svg:circle cx="12" cy="3" r="2"></svg:circle><svg:path d="M12 5v4m-3 8v-2m6 0v2"></svg:path></svg:g>`,
})
export class MeteorIconsRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
