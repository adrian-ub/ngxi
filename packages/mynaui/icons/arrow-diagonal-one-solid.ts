import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalOneSolidIcon],svg[mynaui-arrow-diagonal-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.399 13.237a.75.75 0 0 0 1.06 0l4.929-4.928l2.32 2.32a.75.75 0 0 0 .75-.75v-4.95a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75l2.319 2.32l-4.928 4.928a.75.75 0 0 0 0 1.06m15.202-2.474a.75.75 0 0 1 0 1.06l-4.928 4.929l2.32 2.32a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1-.75-.75v-4.95a.75.75 0 0 1 .75-.75l2.32 2.319l4.928-4.928a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiArrowDiagonalOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
