import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiPirateFlagIcon],svg[fluent-emoji-pirate-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2061id0)" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2061id1)" fill-opacity=".25" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2061id2)" rx=".6"></svg:rect><svg:path fill="url(#f2061id3)" d="M11.96 10.75a1 1 0 1 0-1.707-.707a1 1 0 1 0 .706 1.707l1.116 1.116a.25.25 0 0 0 .354 0l.646-.646a.25.25 0 0 0 0-.354zm0 10.482a1 1 0 1 1-1.707.707a1 1 0 1 1 .706-1.707l1.116-1.116a.25.25 0 0 1 .354 0l.646.647a.25.25 0 0 1 0 .353zm8.189-11.189c0 .276.112.526.293.707l-1.117 1.116a.25.25 0 0 0 0 .354l.647.646a.25.25 0 0 0 .353 0l1.117-1.116a1 1 0 1 0 .707-1.707a1 1 0 1 0-2 0m.293 11.19a1 1 0 1 0 1.707.707a1 1 0 1 0-.707-1.708l-1.117-1.116a.25.25 0 0 0-.353 0l-.647.647a.25.25 0 0 0 0 .353zm-.44-6.19c0-1.933-1.679-3.5-3.75-3.5s-3.75 1.567-3.75 3.5c0 .442.088.864.248 1.254l-.274.41a1.5 1.5 0 0 0 .934 2.298l.342.074v.714a.75.75 0 0 0 1.5 0v-.5h.25v.5a.75.75 0 0 0 1.5 0v-.5h.25v.5a.75.75 0 0 0 1.5 0v-.714l.342-.074a1.5 1.5 0 0 0 .934-2.298l-.273-.41c.16-.39.247-.812.247-1.254m-4.82 1.582c-.48.482-1.184.558-1.57.172c-.322-.323-.27-1.3.074-1.645c.344-.343 1.396-.369 1.668-.097c.386.386.31 1.09-.171 1.57m3.7.172c-.387.386-1.09.31-1.571-.172c-.481-.48-.558-1.184-.172-1.57c.272-.272 1.325-.246 1.669.097c.343.344.396 1.322.073 1.645m-2.847.126a.25.25 0 0 1 .434 0l.57.996a.25.25 0 0 1-.218.374h-1.138a.25.25 0 0 1-.217-.374z"></svg:path><svg:defs><svg:lineargradient id="f2061id0" x1="2.875" x2="30.127" y1="6.625" y2="26.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#221F25"></svg:stop><svg:stop offset="1" stop-color="#402F4D"></svg:stop></svg:lineargradient><svg:lineargradient id="f2061id1" x1="30.297" x2="29.5" y1="19.332" y2="19.332" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBF2FF"></svg:stop><svg:stop offset="1" stop-color="#FBF2FF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2061id2" x1="8.752" x2="8.752" y1="26.281" y2="25.406" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#693CA6"></svg:stop><svg:stop offset="1" stop-color="#693CA6" stop-opacity="0"></svg:stop></svg:lineargradient><svg:radialgradient id="f2061id3" cx="0" cy="0" r="1" gradientTransform="rotate(-90 18.131 1.931)scale(10.25)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F2E3FC"></svg:stop><svg:stop offset="1" stop-color="#F4E8FD"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentEmojiPirateFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
