import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowLeftFilledIcon],svg[lsicon-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.854 4.146l.707.708L3.914 7.5h9.043v1H3.914l2.647 2.646l-.707.708L2 8z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
