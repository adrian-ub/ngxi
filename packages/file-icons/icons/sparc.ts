import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSparcIcon],svg[file-icons-sparc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.524 512L96.134 264.33H206.63l-56.373-129.967l-87.19 181.587H0L150.257 0l135.334 315.95H172.336z"></svg:path>`,
})
export class FileIconsSparcIcon {
  readonly viewBox = input("0 0 286 512")
  readonly width = input("0.56em")
  readonly height = input("1em")
}
