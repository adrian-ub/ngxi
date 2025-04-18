import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAlarmBellTimerOutlineIcon],svg[bubbles-alarm-bell-timer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.505 15.862a7.4 7.4 0 0 0 1.245 2.888h-18s1.5-2.329 1.5-8.25A7.5 7.5 0 0 1 9.75 3V.75"></svg:path><svg:path d="M11.25 6.75a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path><svg:path d="M17.25 4.5v3.75h2.25M7.748 21.75a2.087 2.087 0 0 0 4.005 0"></svg:path></svg:g>`,
})
export class BubblesAlarmBellTimerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
