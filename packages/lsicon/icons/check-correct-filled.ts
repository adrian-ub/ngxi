import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckCorrectFilledIcon],svg[lsicon-check-correct-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm4.854 8.354l4.5-4.5l-.707-.708L7 9.293L4.854 7.146l-.708.708l2.5 2.5a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckCorrectFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
