import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsDoubleIcon],svg[tdesign-tips-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H6v11h4.914l2.586 2.586L16.086 18H21zm2 13h-6.086L13.5 23.414L10.086 20H4V5h19zM19 3.5H2.5v12h-2v-14H19z"></svg:path>`,
})
export class TdesignTipsDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
