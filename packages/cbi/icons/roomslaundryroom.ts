import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomslaundryroomIcon],svg[cbi-roomslaundryroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 6a1 1 0 1 1 0-2a1 1 0 1 1 0 2m-9 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M6 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m15-1a1 1 0 1 1 0 2a1 1 0 1 1 0-2m1 12.028c-.983.152-1.721.975-1.721 1.972s.738 1.82 1.721 1.971c-.842 2.341-3.132 4.03-5.825 4.03C12.77 24 10 21.307 10 18c0-3.31 2.77-6 6.175-6c2.693 0 4.983 1.686 5.825 4.027M27 2H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class CbiRoomslaundryroomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
