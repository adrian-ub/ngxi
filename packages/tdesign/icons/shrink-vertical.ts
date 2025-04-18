import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShrinkVerticalIcon],svg[tdesign-shrink-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1.5v5.086l2.5-2.5L16.914 5.5L12 10.414L7.086 5.5L8.5 4.086l2.5 2.5V1.5zM21 13H3v-2h18zm-9 .586l4.914 4.914l-1.414 1.414l-2.5-2.5V22.5h-2v-5.086l-2.5 2.5L7.086 18.5z"></svg:path>`,
})
export class TdesignShrinkVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
