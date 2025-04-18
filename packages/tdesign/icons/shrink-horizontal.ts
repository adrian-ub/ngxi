import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShrinkHorizontalIcon],svg[tdesign-shrink-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 11h5.086l-2.5-2.5L5.5 7.086L10.414 12L5.5 16.914L4.086 15.5l2.5-2.5H1.5zM13 3v18h-2V3zm.586 9L18.5 7.086L19.914 8.5l-2.5 2.5H22.5v2h-5.086l2.5 2.5l-1.414 1.414z"></svg:path>`,
})
export class TdesignShrinkHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
