import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinBevelFilledIcon],svg[lsicon-linejoin-bevel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h6.207L14 7.793V14H7.5V8.5H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinejoinBevelFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
