import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGotoOutlineIcon],svg[lsicon-goto-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.062 4.531h6.47a4 4 0 1 1 0 8h-6.47m2.253-5.444L2.81 4.58l2.418-2.418"></svg:path>`,
})
export class LsiconGotoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
