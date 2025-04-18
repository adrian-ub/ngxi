import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBriefcase2FilledIcon],svg[tabler-briefcase-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm0 2h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerBriefcase2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
