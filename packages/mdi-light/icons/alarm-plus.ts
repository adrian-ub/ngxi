import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightAlarmPlusIcon],svg[mdi-light-alarm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 6a7.5 7.5 0 0 1 7.5 7.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 13.5A7.5 7.5 0 0 1 11.5 6m0 1A6.5 6.5 0 0 0 5 13.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 11.5 7m3.75-1.75l.64-.75l3.83 3.2l-.64.76zm-7.5 0L3.92 8.46l-.64-.76l3.83-3.2zM11 11h1v2h2v1h-2v2h-1v-2H9v-1h2z"></svg:path>`,
})
export class MdiLightAlarmPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
