import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClockTimeFiveIcon],svg[mdi-clock-time-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m2 15l-3-5.2V7h1.5v4.4l2.8 4.9z"></svg:path>`,
})
export class MdiClockTimeFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
