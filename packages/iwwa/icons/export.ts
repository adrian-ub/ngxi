import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaExportIcon],svg[iwwa-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.019 36.154H4.81a.43.43 0 0 1-.429-.429V7.516c0-.237.192-.429.429-.429h20.48a.428.428 0 1 1 0 .858H5.239v27.353H32.59V15.242a.428.428 0 1 1 .858 0v20.483a.43.43 0 0 1-.429.429m4.552-19.915a.43.43 0 0 1-.429-.429V2.858h-12.92a.428.428 0 1 1 0-.858h13.35c.237 0 .428.191.428.429v13.382a.427.427 0 0 1-.429.428"></svg:path><svg:path fill="currentColor" d="M17.66 22.81a.43.43 0 0 1-.303-.731L37.082 2.314a.43.43 0 0 1 .607.606L17.964 22.684a.43.43 0 0 1-.304.126"></svg:path>`,
})
export class IwwaExportIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
