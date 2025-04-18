import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitBatteryEmptyIcon],svg[uit-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 10a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5m-4-3h-14A1.5 1.5 0 0 0 2 8.5v7A1.5 1.5 0 0 0 3.5 17h14a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 7m.5 8.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class UitBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
