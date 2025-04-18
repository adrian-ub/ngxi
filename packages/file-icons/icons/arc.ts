import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsArcIcon],svg[file-icons-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.114 256h115.773v200.186H198.114z"></svg:path><svg:path fill="currentColor" d="M0 0v512h512V0zm484.346 484.346H27.654V256h170.46V55.814h115.772V256h170.46z"></svg:path>`,
})
export class FileIconsArcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
