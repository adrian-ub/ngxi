import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeClockHandHandClockTimeGiveHumanPersonIcon],svg[streamline-interface-time-clock-hand-hand-clock-time-give-human-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.28 5.25a4.5 4.5 0 1 1 7.93 3.38"></svg:path><svg:path d="M8.75 3.75v2h1.5m-9.5 2h4a2.5 2.5 0 0 1 2.5 2.5h0m-3 0h5a2 2 0 0 1 2 2h0a.5.5 0 0 1-.5.5h-10"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeClockHandHandClockTimeGiveHumanPersonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
