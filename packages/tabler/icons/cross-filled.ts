import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCrossFilledIcon],svg[tabler-cross-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 2l-.117.007A1 1 0 0 0 9 3v4H5a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 5 13h4v8a1 1 0 0 0 1 1h4l.117-.007A1 1 0 0 0 15 21v-8h4a1 1 0 0 0 1-1V8l-.007-.117A1 1 0 0 0 19 7h-4V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class TablerCrossFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
