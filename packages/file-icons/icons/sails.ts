import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSailsIcon],svg[file-icons-sails-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.593 512S-148.257 200.549 254.635 0v512zM317 512V194l195 318z"></svg:path>`,
})
export class FileIconsSailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
