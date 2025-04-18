import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoison24pxIcon],svg[healthicons-poison-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4v2a3 3 0 0 1 3 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a3 3 0 0 1 3-3V4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2m-2 0h-2v4H9a1 1 0 0 0-1 1v1h8V9a1 1 0 0 0-1-1h-2zm.436 9.4l-1.414 1.414l-1.415-1.414l-1.414 1.414l1.414 1.414l-1.414 1.414l1.414 1.415l1.415-1.415l1.414 1.415l1.414-1.415l-1.414-1.414l1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPoison24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
