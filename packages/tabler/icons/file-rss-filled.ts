import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileRssFilledIcon],svg[tabler-file-rss-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zM9 13a1 1 0 0 0 0 2a2 2 0 0 1 1.995 1.85L11 17a1 1 0 0 0 2 0a4 4 0 0 0-4-4m0-3a1 1 0 0 0 0 2a5 5 0 0 1 5 5a1 1 0 0 0 2 0a7 7 0 0 0-7-7m.01 6H9a1 1 0 0 0-.117 1.993L9.01 18a1 1 0 0 0 0-2m5.989-13.001L19 7h-4z"></svg:path>`,
})
export class TablerFileRssFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
