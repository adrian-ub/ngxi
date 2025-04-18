import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFolderOpenIcon],svg[bx-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A1 1 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551M17.341 18H4.517l2.143-5h12.824zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7z"></svg:path>`,
})
export class BxFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
