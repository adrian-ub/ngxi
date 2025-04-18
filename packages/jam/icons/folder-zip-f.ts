import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFolderZipFIcon],svg[jam-folder-zip-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2M14 6v2h2V6zm-2-2v2h2V4zm0 4v2h2V8zm2 2v2h2v-2zm-2 2v2h2v-2z"></svg:path>`,
})
export class JamFolderZipFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
