import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconXCircleFill16Icon],svg[octicon-x-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.343 13.657A8 8 0 1 1 13.658 2.343A8 8 0 0 1 2.343 13.657M6.03 4.97a.75.75 0 0 0-1.042.018a.75.75 0 0 0-.018 1.042L6.94 8L4.97 9.97a.749.749 0 0 0 .326 1.275a.75.75 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326a.75.75 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275a.75.75 0 0 0-.734.215L8 6.94Z"></svg:path>`,
})
export class OcticonXCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
