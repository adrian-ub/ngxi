import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowSmallRightIcon],svg[codicon-arrow-small-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.64 5l2.5 2.5v.7l-2.5 2.5l-.71-.7l1.64-1.65H4v-1h5.57L7.92 5.7z"></svg:path>`,
})
export class CodiconArrowSmallRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
