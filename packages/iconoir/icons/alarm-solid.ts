import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAlarmSolidIcon],svg[iconoir-alarm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m0 10.5a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v4.25H17a.75.75 0 0 1 0 1.5zm-7.6-9.8a.75.75 0 0 0 1.05.15l2-1.5a.75.75 0 1 0-.9-1.2l-2 1.5a.75.75 0 0 0-.15 1.05m15.2 0a.75.75 0 0 1-1.05.15l-2-1.5a.75.75 0 1 1 .9-1.2l2 1.5a.75.75 0 0 1 .15 1.05" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAlarmSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
