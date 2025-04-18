import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAlarmSolidIcon],svg[teenyicons-alarm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.854.854l-3 3l-.708-.708l3-3zm10.293 3l-3-3l.707-.708l3 3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 8.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0M8 8V5H7v4h3V8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAlarmSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
