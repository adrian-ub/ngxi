import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBulletinBoardIcon],svg[mdi-bulletin-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.04 2.5L9.53 5h5zM4 7v13h16V7zm8-7l5 5h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3zM7 18v-4h5v4zm7-1v-7h4v7zm-8-5V9h5v3z"></svg:path>`,
})
export class MdiBulletinBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
