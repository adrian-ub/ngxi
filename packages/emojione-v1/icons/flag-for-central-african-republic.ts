import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForCentralAfricanRepublicIcon],svg[emojione-v1-flag-for-central-african-republic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#003893" d="M0 21h64c0-6.075-3.373-11-10-11H10C3.373 10 0 14.925 0 21"></svg:path><svg:path fill="#e6e7e8" d="M0 21h64v11H0z"></svg:path><svg:path fill="#137a08" d="M0 32h64v11H0z"></svg:path><svg:path fill="#f9cb38" d="M64 43H0c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11"></svg:path><svg:path fill="#ec1c24" d="M27 10h10v44H27z"></svg:path><svg:path fill="#f9cb38" d="m16.559 14.425l-3.439.004l-1.07-3.476l-1.054 3.476l-3.438-.004l2.786 2.116l-1.081 3.453l2.797-2.146l2.799 2.146l-1.085-3.453z"></svg:path>`,
})
export class EmojioneV1FlagForCentralAfricanRepublicIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
