import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCard10FilledIcon],svg[tabler-play-card-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4.5 0C12.047 8 11 9.395 11 11v2c0 1.605 1.047 3 2.5 3s2.5-1.395 2.5-3v-2c0-1.605-1.047-3-2.5-3m0 2c.203 0 .5.395.5 1v2c0 .605-.297 1-.5 1s-.5-.395-.5-1v-2c0-.605.297-1 .5-1M7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2"></svg:path>`,
})
export class TablerPlayCard10FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
