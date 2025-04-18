import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTennisBallIcon],svg[uil-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0-7.35 16.76l.09.1a10 10 0 0 0 14.52 0l.09-.1A10 10 0 0 0 12 2M5.61 16.79a7.93 7.93 0 0 1 0-9.58a6 6 0 0 1 0 9.58M12 20a7.9 7.9 0 0 1-5-1.77A8 8 0 0 0 7 5.77a7.95 7.95 0 0 1 10 0a8 8 0 0 0 0 12.46A7.9 7.9 0 0 1 12 20m6.39-3.21a6 6 0 0 1 0-9.58a7.93 7.93 0 0 1 0 9.58"></svg:path>`,
})
export class UilTennisBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
