import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowMergeIcon],svg[zmdi-arrow-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243 371l-72-72l30-30l72 72zM41 107l96-96l96 96h-75v136L30 371L0 341l115-115V107z"></svg:path>`,
})
export class ZmdiArrowMergeIcon {
  readonly viewBox = input("0 0 280 384")
  readonly width = input("0.73em")
  readonly height = input("1em")
}
