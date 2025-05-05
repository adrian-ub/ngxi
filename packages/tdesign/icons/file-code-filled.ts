import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCodeFilledIcon],svg[tdesign-file-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h8v-4h5.208l-1.006-.996L21 12.264V6.587zM14.5 7.5V3L19 7.5z"></svg:path><svg:path fill="currentColor" d="m23.663 15.256l-2.776 2.749l2.776 2.748l-1.407 1.421l-4.212-4.17l4.212-4.169zM13 21h4.5v2H13z"></svg:path>`,
})
export class TdesignFileCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
