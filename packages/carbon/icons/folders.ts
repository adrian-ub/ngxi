import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFoldersIcon],svg[carbon-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h5.667a2 2 0 0 1 1.2.4l3.467 2.6H26a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M11.667 11H5.998L6 26h20V14H15.667zM28 9H17.667l-4-3H6V4h7.667a2 2 0 0 1 1.2.4L18.334 7H28z"></svg:path>`,
})
export class CarbonFoldersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
