import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiJapaneseAcceptableButtonIcon],svg[fluent-emoji-japanese-acceptable-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#f762id3)"><svg:path fill="url(#f762id2)" d="M15.602 30.194c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14"></svg:path><svg:path fill="url(#f762id0)" d="M15.602 30.194c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14"></svg:path><svg:path fill="url(#f762id1)" d="M15.602 30.194c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14"></svg:path><svg:path fill="#FCF2FF" d="M17.239 14.718v2.121c0 3.087.042 3.591.042 3.717c0 .147-.021.168-.168.168h-.945c-.168 0-.189-.02-.189-.168v-1.029h-5.061v1.617c0 .147-.021.168-.168.168h-.966c-.147 0-.168-.02-.168-.168c0-.126.042-.65.042-3.906V15.18c0-1.974-.042-2.54-.042-2.646c0-.147.021-.168.168-.168c.126 0 .672.042 2.268.042h2.793c1.617 0 2.142-.042 2.268-.042c.147 0 .168.021.168.168c0 .105-.042.651-.042 2.184m-1.26 3.633v-4.767h-5.061v4.767zm9.135-10.269v.987c0 .147-.021.168-.168.168c-.105 0-.714-.02-2.373-.042v9.954c0 2.226.042 3.171.042 3.906c0 .861-.168 1.302-.588 1.596c-.504.378-1.659.441-3.549.4c-.42 0-.42 0-.525-.42c-.105-.379-.231-.694-.42-.967a31 31 0 0 0 2.52.105c.861 0 1.155-.126 1.155-.819V9.195H9.847c-1.974 0-2.646.042-2.751.042c-.147 0-.168-.02-.168-.168v-.987c0-.147.021-.168.168-.168c.105 0 .777.042 2.751.042h12.348c1.974 0 2.646-.042 2.751-.042c.147 0 .168.021.168.168"></svg:path></svg:g><svg:defs><svg:radialgradient id="f762id0" cx="0" cy="0" r="1" gradientTransform="rotate(124.228 2.753 12.614)scale(16.4093)" gradientUnits="userSpaceOnUse"><svg:stop offset=".741" stop-color="#FFC86F" stop-opacity="0"></svg:stop><svg:stop offset=".922" stop-color="#FFC86F"></svg:stop></svg:radialgradient><svg:radialgradient id="f762id1" cx="0" cy="0" r="1" gradientTransform="rotate(136.771 5.183 11.085)scale(15.1679)" gradientUnits="userSpaceOnUse"><svg:stop offset=".774" stop-color="#FE582E" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FE582E"></svg:stop></svg:radialgradient><svg:lineargradient id="f762id2" x1="15.602" x2="15.602" y1="2.194" y2="30.194" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFB555"></svg:stop><svg:stop offset="1" stop-color="#FF8753"></svg:stop></svg:lineargradient><svg:clippath id="f762id3"><svg:path fill="#fff" d="M0 0h32v32H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class FluentEmojiJapaneseAcceptableButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
