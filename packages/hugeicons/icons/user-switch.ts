import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSwitchIcon],svg[hugeicons-user-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.789 9.037c-.708.383-2.562 1.165-1.433 2.143c.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82c1.13-.978-.725-1.76-1.433-2.143c-1.659-.898-3.763-.898-5.422 0M8.75 4.273A2.26 2.26 0 0 1 6.5 6.545a2.26 2.26 0 0 1-2.25-2.272A2.26 2.26 0 0 1 6.5 2a2.26 2.26 0 0 1 2.25 2.273M4 15c0 3.317 2.683 6 6 6l-.857-1.714M20 9c0-3.317-2.683-6-6-6l.857 1.714m-.068 14.323c-.708.383-2.562 1.165-1.433 2.143c.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82c1.13-.978-.725-1.76-1.433-2.143c-1.659-.898-3.763-.898-5.422 0m4.961-4.764a2.26 2.26 0 0 1-2.25 2.273a2.26 2.26 0 0 1-2.25-2.273A2.26 2.26 0 0 1 17.5 12a2.26 2.26 0 0 1 2.25 2.273" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
