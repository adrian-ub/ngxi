import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAlarmBellOffOutlineIcon],svg[bubbles-alarm-bell-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22.501 2.25l-21 21M10 21.75a2.087 2.087 0 0 0 4.005 0M12.001 3V.75m-1.501 18H21s-1.5-1.2-1.5-8.25a7 7 0 0 0-.093-.915M16.212 4.3A7.5 7.5 0 0 0 4.5 10.5v5.25"></svg:path>`,
})
export class BubblesAlarmBellOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
