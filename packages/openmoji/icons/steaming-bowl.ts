import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSteamingBowlIcon],svg[openmoji-steaming-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiSteamingBowl0" d="M34.277 10.813L34.434 33m-6.157-22.187L28.434 33m-6.157-22.187L22.434 33"></svg:path></svg:defs><svg:path fill="#d22f27" d="M62.92 35.003A1.88 1.88 0 0 0 61.046 33H11.053a1.973 1.973 0 0 0-1.97 2.131c.857 9.729 7.53 17.985 16.794 21.724v5.487A1.72 1.72 0 0 0 27.645 64h16.71a1.72 1.72 0 0 0 1.767-1.658v-4.843c9.712-3.378 16.072-12.109 16.798-22.496"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M61.434 21h-44m44-8h-44"></svg:path><svg:use href="#openmojiSteamingBowl0" stroke-width="1.841"></svg:use><svg:path stroke-width="2" d="M62.92 35.003A1.88 1.88 0 0 0 61.046 33H11.053a1.973 1.973 0 0 0-1.97 2.131c.857 9.729 7.53 17.985 16.794 21.724v5.487A1.72 1.72 0 0 0 27.645 64h16.71a1.72 1.72 0 0 0 1.767-1.658v-4.843c9.712-3.378 16.072-12.109 16.798-22.496"></svg:path></svg:g><svg:use href="#openmojiSteamingBowl0" fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.841"></svg:use>`,
})
export class OpenmojiSteamingBowlIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
