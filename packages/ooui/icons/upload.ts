import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUploadIcon],svg[ooui-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"></svg:path><svg:path fill="currentColor" d="M10 1L5 7h4v8h2V7h4z"></svg:path>`,
})
export class OouiUploadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
