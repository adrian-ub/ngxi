import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWindow1Icon],svg[tdesign-window-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 .613l11 3.666V22H2V3h9zM11 5H4v15h10.838L11 18.721zm9 14.613V13.72l-7-2.333v5.891zm0-8V5.72l-7-2.333v5.891z"></svg:path>`,
})
export class TdesignWindow1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
