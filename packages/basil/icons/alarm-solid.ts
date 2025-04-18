import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilAlarmSolidIcon],svg[basil-alarm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.53 3.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m.75 3.5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.47 4.53a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1-1.06 1.06z"></svg:path>`,
})
export class BasilAlarmSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
