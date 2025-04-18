import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMensRoomIcon],svg[twemoji-mens-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#269" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="m26.795 15.727l-7.041-4.4C20.506 10.691 21 9.666 21 8.5C21 6.566 19.656 5 18 5c-1.657 0-3 1.567-3 3.5c0 1.166.494 2.192 1.246 2.828l-7.041 4.4a1.5 1.5 0 1 0 1.59 2.544L14 16.268V31.5a1.5 1.5 0 1 0 3 0V24a1 1 0 1 1 2 0v7.5a1.5 1.5 0 0 0 3 0V16.269l3.205 2.003a1.5 1.5 0 1 0 1.59-2.545"></svg:path>`,
})
export class TwemojiMensRoomIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
