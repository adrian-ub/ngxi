import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoProgressOneIcon],svg[entypo-progress-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5H2C.9 5 0 5.9 0 7v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 8H2V7h16zM7 8H3v4h4z"></svg:path>`,
})
export class EntypoProgressOneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
