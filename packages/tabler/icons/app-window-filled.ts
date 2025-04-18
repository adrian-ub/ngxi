import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAppWindowFilledIcon],svg[tabler-app-window-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM6.01 7l-.127.007A1 1 0 0 0 6 9l.127-.007A1 1 0 0 0 6.01 7m3 0l-.127.007A1 1 0 0 0 9 9l.127-.007A1 1 0 0 0 9.01 7"></svg:path>`,
})
export class TablerAppWindowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
