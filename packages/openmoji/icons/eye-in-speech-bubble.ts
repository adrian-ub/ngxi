import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEyeInSpeechBubbleIcon],svg[openmoji-eye-in-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M7.688 31.438c7.187 11.937 20.471 18.965 29.562 21.5c4.538 1.265 16.125 9.75 16.125 9.75S50.483 54.192 50 51.25c-1.835-11.171 13.063-12.5 14.531-20.466C56 10.958 26-6.687 7.687 31.438"></svg:path><svg:circle cx="36" cy="30.5" r="14.222" fill="#A57939"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.688 31.438c7.187 11.937 20.471 18.965 29.562 21.5c4.538 1.265 16.125 9.75 16.125 9.75S50.483 54.192 50 51.25c-1.835-11.171 13.063-12.5 14.531-20.466C56 10.958 26-6.687 7.687 31.438"></svg:path><svg:circle cx="36" cy="30.5" r="7.782"></svg:circle><svg:circle cx="36" cy="30.5" r="14.222" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="36" cy="30.5" r="7.782" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle>`,
})
export class OpenmojiEyeInSpeechBubbleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
