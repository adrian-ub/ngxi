import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForAlgeriaIcon],svg[emojione-v1-flag-for-algeria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#137a08" d="M61 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h41c6.627 0 10 4.925 10 11z"></svg:path><svg:path fill="#e6e7e8" d="M54 10H32v44h22c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11"></svg:path><svg:g fill="#ec1c24"><svg:path fill-rule="evenodd" d="M43.45 39.14c-2.729 4.254-8.409 6.94-14.359 5.202c-5.608-1.644-9.463-7.08-9.143-12.941c.312-5.888 4.732-10.896 10.48-11.917c6.094-1.083 10.985 2.185 13.07 5.601c-2.476-2.434-5.354-3.528-8.726-3.146c-2.643.303-4.85 1.498-6.577 3.512c-3.382 3.939-3.259 9.844.274 13.562c2.025 2.128 4.517 3.245 7.458 3.271c2.941.021 5.432-1.091 7.521-3.144"></svg:path><svg:path d="m36.726 26.14l1.74 3.578l3.924.592l-2.863 2.76l.643 3.919l-3.503-1.869l-3.537 1.828l.702-3.908L31 30.24l3.937-.548z"></svg:path></svg:g>`,
})
export class EmojioneV1FlagForAlgeriaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
