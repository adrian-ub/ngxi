import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBlobIcon],svg[tabler-blob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.897 20.188C7.567 20.94 9.793 21 12 21s4.434-.059 6.104-.812c.868-.392 1.614-.982 2.133-1.856c.514-.865.763-1.94.763-3.234c0-2.577-.983-5.315-2.557-7.416C16.873 5.588 14.61 4 12 4S7.127 5.588 5.557 7.682C3.983 9.783 3 12.522 3 15.098c0 1.295.249 2.369.763 3.234c.519.874 1.265 1.464 2.134 1.856"></svg:path>`,
})
export class TablerBlobIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
