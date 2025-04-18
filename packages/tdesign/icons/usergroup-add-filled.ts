import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUsergroupAddFilledIcon],svg[tdesign-usergroup-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a3 3 0 0 0 0 6v2a5 5 0 0 0-5 5v4H2v-4a7 7 0 0 1 3.75-6.2A5 5 0 0 1 9 3h1v2zm1 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0m6.225 6a5.5 5.5 0 0 0-1.725 4c0 1.576.663 2.997 1.725 4H7v-3a5 5 0 0 1 5-5z"></svg:path><svg:path fill="currentColor" d="M24 19v-2h-3v-3h-2v3h-3v2h3v3h2v-3z"></svg:path>`,
})
export class TdesignUsergroupAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
