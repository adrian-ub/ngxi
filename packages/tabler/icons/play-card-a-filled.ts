import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCardAFilledIcon],svg[tabler-play-card-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M12 8a3 3 0 0 0-3 3v4a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 .883.993L14 16a1 1 0 0 0 1-1v-4a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 .883-.993zM7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2"></svg:path>`,
})
export class TablerPlayCardAFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
