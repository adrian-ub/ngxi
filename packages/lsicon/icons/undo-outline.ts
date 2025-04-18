import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUndoOutlineIcon],svg[lsicon-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.489 3.011V5.99h3m-1.825 5.396a5.5 5.5 0 1 0-.857-5.203"></svg:path>`,
})
export class LsiconUndoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
