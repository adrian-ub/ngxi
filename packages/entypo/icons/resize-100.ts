import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoResize100Icon],svg[entypo-resize-100-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.1 14.1L1 17l2 2l2.9-3.1L8 18v-6H2zM19 3l-2-2l-2.9 3.1L12 2v6h6l-2.1-2.1z"></svg:path>`,
})
export class EntypoResize100Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
