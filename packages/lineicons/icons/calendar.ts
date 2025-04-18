import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalendarIcon],svg[lineicons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1m13 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1m13.1 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1M20.5 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1m13 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1m13.1 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1"></svg:path><svg:path fill="currentColor" d="M56 15.4H34.3v-1.9c2.3-.9 3.9-3.1 3.9-5.7c0-3.4-2.8-6.1-6.2-6.1s-6.2 2.7-6.2 6.1c0 2.6 1.6 4.8 3.9 5.7v1.9H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V21.6c0-3.4-2.9-6.2-6.3-6.2M32 6.2c.9 0 1.7.7 1.7 1.6S33 9.4 32 9.4s-1.7-.7-1.7-1.6s.8-1.6 1.7-1.6M8 19.9h48c1 0 1.8.8 1.8 1.8v6.2H6.3v-6.2c0-1.1.7-1.8 1.7-1.8m48 37.9H8c-1 0-1.8-.8-1.8-1.8V32.3h51.5V56c.1 1-.7 1.8-1.7 1.8"></svg:path>`,
})
export class LineiconsCalendarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
