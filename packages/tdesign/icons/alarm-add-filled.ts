import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmAddFilledIcon],svg[tdesign-alarm-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 7.914L6.914 2.5L5.5 1.086L.086 6.5zM23.914 6.5L18.5 1.086L17.086 2.5L22.5 7.914zM12 3C6.477 3 2 7.477 2 13s4.477 10 10 10s10-4.477 10-10S17.523 3 12 3m5 11h-4v4h-2v-4H7v-2h4V8h2v4h4z"></svg:path>`,
})
export class TdesignAlarmAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
