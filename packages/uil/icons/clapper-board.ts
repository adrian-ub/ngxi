import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilClapperBoardIcon],svg[uil-clapper-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-2.91 2l-4 4H7.91l4-4ZM4 5a1 1 0 0 1 1-1h4.09l-4 4H4Zm16 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11h-5.09l4-4H19a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilClapperBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
