import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiUploadIcon],svg[zmdi-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21h299v43H0zm0 214L149 85l150 150h-86v128H85V235z"></svg:path>`,
})
export class ZmdiUploadIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
