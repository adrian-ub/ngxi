import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxUploadIcon],svg[bx-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2V9h3l-4-5l-4 5h3z"></svg:path><svg:path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z"></svg:path>`,
})
export class BxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
