import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsDoubleFilledIcon],svg[tdesign-tips-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20h-6.086L13.5 23.414L10.086 20H4V5h19zM19 3.5H2.5v12h-2v-14H19z"></svg:path>`,
})
export class TdesignTipsDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
