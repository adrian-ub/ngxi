import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagClock28RegularIcon],svg[fluent-flag-clock-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16.5v-12h16.392l-3.527 5.6a.75.75 0 0 0 0 .8l1.349 2.14a7.6 7.6 0 0 1 1.788.026L19.886 10.5l3.999-6.35A.75.75 0 0 0 23.25 3H4.75a.75.75 0 0 0-.75.75v20.5a.75.75 0 0 0 1.5 0V18h7.927q.282-.797.728-1.5zm21.5 4a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6.5-4a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H21v-3a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class FluentFlagClock28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
