import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveFilledIcon],svg[lsicon-move-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.293l2.229 2.228l-.708.708L8.5 3.207V7.5h4.293l-1.021-1.021l.707-.708L14.707 8l-2.228 2.229l-.707-.708l1.02-1.021H8.5v4.293l1.021-1.021l.708.707L8 14.707L5.771 12.48l.708-.707l1.021 1.02V8.5H3.207L4.23 9.521l-.708.708L1.293 8L3.52 5.771l.708.708L3.207 7.5H7.5V3.207L6.479 4.23l-.709-.71z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
