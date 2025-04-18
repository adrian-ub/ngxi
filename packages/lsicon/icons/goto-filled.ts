import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGotoFilledIcon],svg[lsicon-goto-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.874 1.81l.707.707l-1.514 1.514h5.464a4.5 4.5 0 1 1 0 9H3.063v-1H9.53a3.5 3.5 0 1 0 0-7H3.967l1.702 1.702l-.707.707l-2.86-2.859z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGotoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
