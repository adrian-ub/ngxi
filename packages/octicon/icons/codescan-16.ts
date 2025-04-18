import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCodescan16Icon],svg[octicon-codescan-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5L8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0M6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5z"></svg:path><svg:path fill="currentColor" d="M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215ZM1.5 7.5a6 6 0 0 0 3.608 5.504a6 6 0 0 0 6.486-1.117a.75.75 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5"></svg:path>`,
})
export class OcticonCodescan16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
