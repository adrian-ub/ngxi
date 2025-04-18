import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTopFilledIcon],svg[lsicon-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM7.979 4.008l4.484 4.484l-.707.707l-3.277-3.277v7.984h-1V5.922L4.2 9.199l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
