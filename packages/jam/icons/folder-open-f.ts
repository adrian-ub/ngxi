import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFolderOpenFIcon],svg[jam-folder-open-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2H17a3 3 0 0 1 3 3zm0 2h20v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z"></svg:path>`,
})
export class JamFolderOpenFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
