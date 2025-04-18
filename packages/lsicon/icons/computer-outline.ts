import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerOutlineIcon],svg[lsicon-computer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 13.5h6m-4 0V11m2 2.5V11m-6.5-.5h11v-8h-11z"></svg:path>`,
})
export class LsiconComputerOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
