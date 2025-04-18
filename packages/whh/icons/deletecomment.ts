import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDeletecommentIcon],svg[whh-deletecomment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-103 121-201 142l-17 2q26-57 30-124.5T176 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m256-480q0-13-9.5-22.5T736 384H288q-13 0-22.5 9.5T256 416v64q0 13 9.5 22.5T288 512h448q13 0 22.5-9.5T768 480z"></svg:path>`,
})
export class WhhDeletecommentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
