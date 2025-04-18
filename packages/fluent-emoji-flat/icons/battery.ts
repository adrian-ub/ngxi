import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBatteryIcon],svg[fluent-emoji-flat-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M13 4V2.79c0-.438.314-.79.705-.79h4.59c.39 0 .705.352.705.79V4h3.23c.98 0 1.77.79 1.77 1.769V28.23c0 .98-.79 1.769-1.77 1.769H9.77A1.765 1.765 0 0 1 8 28.231V5.77C8 4.789 8.79 4 9.77 4z"></svg:path><svg:path fill="#86D72F" d="M24 6H8v22h16z"></svg:path><svg:path fill="#fff" d="M15 12.5v.93c0 .31.26.57.57.57h.86c.31 0 .57-.26.57-.58v-.92h.93c.31 0 .57-.26.56-.58v-.85a.57.57 0 0 0-.57-.57H17v-.93c0-.31-.26-.57-.58-.57h-.85c-.31 0-.57.26-.57.57v.93h-.93a.57.57 0 0 0-.57.57v.86c0 .31.26.57.57.57zM17.93 25h-3.86a.57.57 0 0 1-.57-.57v-.85c0-.32.26-.58.57-.58h3.85c.32 0 .57.26.57.57v.85c.01.32-.25.58-.56.58"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBatteryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
