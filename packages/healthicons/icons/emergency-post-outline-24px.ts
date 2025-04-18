import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEmergencyPostOutline24pxIcon],svg[healthicons-emergency-post-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.575 9a2 2 0 0 0-1.907 1.398l-2.21 7A2 2 0 0 0 4.363 20h10.219a2 2 0 0 0 1.907-1.398l1.727-5.469l1.493 4.17L18 18l-.5 2l2.818-.791a2 2 0 0 0 1.275-2.58L19 9zm8.008 9H4.364l2.211-7h10.218z" clip-rule="evenodd"></svg:path><svg:path d="M11.97 12.743a1 1 0 1 0-1.94-.486l-.312 1.246l-1.223.006a1 1 0 0 0 .01 2l.713-.003l-.188.752a1 1 0 1 0 1.94.485l.31-1.243h1.22a1 1 0 1 0 0-2h-.72z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 5.5h-3v1h3zM13 4v4h6V4z" clip-rule="evenodd"></svg:path><svg:path d="M17.5 4H19v5h-1.5z"></svg:path></svg:g>`,
})
export class HealthiconsEmergencyPostOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
