import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDownloadIcon],svg[zmdi-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 128L149 277L0 128h85V0h128v128zM0 320h299v43H0z"></svg:path>`,
})
export class ZmdiDownloadIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
