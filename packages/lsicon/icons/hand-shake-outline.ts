import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHandShakeOutlineIcon],svg[lsicon-hand-shake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 14V7.5c0-.5 3.5 4 4 4s4-4.5 4-4V14M4.5 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm6.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"></svg:path>`,
})
export class LsiconHandShakeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
