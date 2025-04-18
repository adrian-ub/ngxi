import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeGatsbyIcon],svg[vscode-icons-file-type-gatsby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M27 16h-7v2h4.8a9.07 9.07 0 0 1-5.8 6.5L7.5 13A9 9 0 0 1 16 7a9.23 9.23 0 0 1 7.4 3.8l1.5-1.3a10.993 10.993 0 0 0-19.6 4.1l13.2 13.2A11.25 11.25 0 0 0 27 16m-22 .1a10.68 10.68 0 0 0 3.2 7.6a10.86 10.86 0 0 0 7.6 3.2Z"></svg:path><svg:path fill="#639" d="M16 2a14 14 0 1 0 14 14A14.04 14.04 0 0 0 16 2M8.2 23.8A10.86 10.86 0 0 1 5 16.2L15.9 27a11.35 11.35 0 0 1-7.7-3.2m10.2 2.9L5.3 13.6a10.993 10.993 0 0 1 19.6-4.1l-1.5 1.3A9.23 9.23 0 0 0 16 7a9.1 9.1 0 0 0-8.5 6L19 24.5a9.07 9.07 0 0 0 5.8-6.5H20v-2h7a11.03 11.03 0 0 1-8.6 10.7"></svg:path>`,
})
export class VscodeIconsFileTypeGatsbyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
