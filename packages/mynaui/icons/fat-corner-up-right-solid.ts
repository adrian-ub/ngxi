import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpRightSolidIcon],svg[mynaui-fat-corner-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.296 3.489a.75.75 0 0 0-1.3.511v4.064c-2.747.193-5.118 1.341-7.08 3.421c-2.126 2.253-3.341 5.054-3.662 8.366a.75.75 0 0 0 1.336.534c2.188-2.793 4.004-4.196 5.438-4.515c1.393-.309 2.714-.39 3.969-.252V20a.75.75 0 0 0 1.312.496l7.253-8.213a.75.75 0 0 0-.013-1.008z"></svg:path>`,
})
export class MynauiFatCornerUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
