import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlag2FilledIcon],svg[tabler-flag-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4a1 1 0 0 1 .993.883L20 5v9a1 1 0 0 1-.883.993L19 15H6v6a1 1 0 0 1-.883.993L5 22a1 1 0 0 1-.993-.883L4 21V5a1 1 0 0 1 .883-.993L5 4z"></svg:path>`,
})
export class TablerFlag2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
