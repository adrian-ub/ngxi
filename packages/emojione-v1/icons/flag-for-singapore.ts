import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForSingaporeIcon],svg[emojione-v1-flag-for-singapore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M54 55H10C3.373 55 0 50.075 0 44V33h64v11c0 6.075-3.373 11-10 11"></svg:path><svg:path fill="#ec1c24" d="M0 22c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11v11H0z"></svg:path><svg:path fill="#fff" d="M10.826 22.12a7.82 7.82 0 0 1 7.498-7.814A8.277 8.277 0 0 0 7.315 22.12a8.277 8.277 0 0 0 8.277 8.279c.957 0 1.878-.161 2.732-.462a7.82 7.82 0 0 1-7.498-7.817"></svg:path><svg:path fill="#fff" d="m21.93 16.752l-1.543.002l-.48-1.562l-.475 1.562l-1.546-.002l1.254.951l-.488 1.552l1.257-.964l1.261.964l-.489-1.552zm4.408 3.278h-1.543l-.48-1.563l-.475 1.563h-1.546l1.252.948l-.486 1.551l1.257-.964l1.258.964l-.485-1.551zm-1.65 5.24H23.14l-.475-1.563l-.475 1.563h-1.546l1.252.95l-.486 1.55l1.257-.964l1.258.964l-.487-1.55zm-5.528 0h-1.539l-.481-1.563l-.474 1.563H15.12l1.252.95l-.485 1.55l1.253-.964l1.261.964l-.486-1.55zm-1.646-5.24h-1.543l-.48-1.563l-.471 1.563h-1.55l1.252.948l-.486 1.551l1.257-.964l1.258.964l-.486-1.551z"></svg:path>`,
})
export class EmojioneV1FlagForSingaporeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
