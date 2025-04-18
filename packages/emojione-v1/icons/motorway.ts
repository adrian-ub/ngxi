import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1MotorwayIcon],svg[emojione-v1-motorway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d2d3" d="M63.979 57.081a6.9 6.9 0 0 1-6.895 6.902H6.894A6.9 6.9 0 0 1 0 57.081V6.898A6.9 6.9 0 0 1 6.894 0h50.191a6.896 6.896 0 0 1 6.895 6.898v50.183z"></svg:path><svg:g fill="#405967"><svg:path d="M7.986 63.848S11.772 20.291 50.577 0H6.894A6.9 6.9 0 0 0 0 6.898v50.183c0 3.812 3.089 6.902 6.894 6.902h50.191c.46 0 .908-.05 1.345-.136z"></svg:path><svg:path d="M63.4 4.147v.644c-9.04 12.269-16.11 41.716-4.783 59.01a6.894 6.894 0 0 0 5.361-6.72V6.901c0-.981-.208-1.908-.578-2.751m-15.641 8.681c.039-.059 3.312-6.438 8.808-9.756l-.853-.534c-5.798 3.502-10.278 9.05-10.443 9.307zM36.958 36.968c-.204-3.824 2.464-11.691 4.01-15.27l-1.953-.531c-4.269 5.426-6.312 15.179-6.36 15.517l4.308.284m-.753 26.785c-.338-2.336-1.729-9.194-.432-17.11l-4.1-.428c-2.775 6.467-4.587 17.22-4.532 17.591l9.06-.048"></svg:path></svg:g>`,
})
export class EmojioneV1MotorwayIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
