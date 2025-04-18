import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowLeftBottomIcon],svg[zmdi-arrow-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 51L73 299h140v42H0V128h43v141L290 21z"></svg:path>`,
})
export class ZmdiArrowLeftBottomIcon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
