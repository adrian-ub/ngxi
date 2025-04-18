import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceShelterIcon],svg[guidance-shelter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 20v-2.5s-1.5-1-4-1s-4 1-4 1V20m15 0v-2.5s-1.5-1-4-1a9 9 0 0 0-1.5.124m8.5-6.374l-.247-.113a20 20 0 0 1-8.942-8.104L13 1.5h-2l-.311.533a20 20 0 0 1-8.942 8.104l-.247.113V22.5h21zM8.35 14.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25zm7 0s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceShelterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
