import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFileBlankOutlineIcon],svg[ci-file-blank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.09.09 0 0 1 .032.006a.15.15 0 0 0 .03.006c.088.006.175.023.259.051l.028.009a.988.988 0 0 1 .359.228l6 6a.987.987 0 0 1 .2.293c.01.022.017.045.025.068l.009.026c.028.083.044.17.049.258l.007.027C20 8.982 20 8.991 20 9v11a2 2 0 0 1-2 2ZM6 4v16h12V10h-5a1 1 0 0 1-1-1V4H6Zm8 1.414V8h2.586L14 5.414Z"></svg:path>`,
})
export class CiFileBlankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
