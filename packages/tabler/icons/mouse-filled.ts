import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMouseFilledIcon],svg[tabler-mouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-2 4a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 11V7l-.007-.117A1 1 0 0 0 12 6"></svg:path>`,
})
export class TablerMouseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
