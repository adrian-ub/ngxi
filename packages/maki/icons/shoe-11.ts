import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiShoe11Icon],svg[maki-shoe-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.5 5L5.805 3.983L4.8 2.676a.446.446 0 0 0-.627-.083a.442.442 0 0 0-.164.392h-.008V4H2v-.5a.5.5 0 1 0-1 0V6h3.5C5.5 6 6 7 7 7h3l.004-.5C10.004 5.946 7.5 5 7.5 5z" fill="currentColor"></svg:path><svg:path d="M5.527 7.584C5.117 7.31 4.651 7 4 7H1v1.47c0 .293.237.53.53.53h1.94A.53.53 0 0 0 4 8.47V8c.349 0 .638.192.973.416c.41.274.876.584 1.527.584h3a.5.5 0 0 0 .5-.5V8H6.5c-.349 0-.638-.193-.973-.416z" fill="currentColor"></svg:path>`,
})
export class MakiShoe11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
