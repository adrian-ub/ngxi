import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerExclamationOutlineIcon],svg[lsicon-computer-exclamation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m5.5 6.219l2 2l3.5-3.5M9 13.5h2m-2 0v-3m0 3H7m2-3h5.5v-8h-13v8H7m2 0H7m-2 3h2m0 0v-3"></svg:path>`,
})
export class LsiconComputerExclamationOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
