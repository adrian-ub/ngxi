import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeHourGlassHourglassLoadingMeasureClockTimeIcon],svg[streamline-interface-time-hour-glass-hourglass-loading-measure-clock-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 3.5a3.5 3.5 0 0 1-7 0v-3h7Z"></svg:path><svg:path d="M10.5 10.5a3.5 3.5 0 0 0-7 0v3h7Zm-9-10h11m-11 13h11"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeHourGlassHourglassLoadingMeasureClockTimeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
