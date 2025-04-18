import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoResizeFullScreenIcon],svg[entypo-resize-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.987 10.987l-2.931 3.031L2 11.589V18h6.387l-2.43-2.081l3.03-2.932zM11.613 2l2.43 2.081l-3.03 2.932l2 2l2.931-3.031L18 8.411V2z"></svg:path>`,
})
export class EntypoResizeFullScreenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
