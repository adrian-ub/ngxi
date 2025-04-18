import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCamera20Icon],svg[fluent-color-camera-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCamera200)" d="M6.779 2.826A1.5 1.5 0 0 1 8.119 2h3.764a1.5 1.5 0 0 1 1.342.83L13.81 4h1.69A2.5 2.5 0 0 1 18 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.69z"></svg:path><svg:path fill="url(#fluentColorCamera201)" fill-opacity=".5" d="M6.779 2.826A1.5 1.5 0 0 1 8.119 2h3.764a1.5 1.5 0 0 1 1.342.83L13.81 4h1.69A2.5 2.5 0 0 1 18 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.69z"></svg:path><svg:path fill="url(#fluentColorCamera203)" d="M13.995 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="url(#fluentColorCamera202)" d="M13 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="url(#fluentColorCamera204)" d="M15 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorCamera200" cx="0" cy="0" r="1" gradientTransform="matrix(18 15.49994 -32.18524 37.37655 -.5 3)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".535" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCamera201" cx="0" cy="0" r="1" gradientTransform="matrix(.5 5.76923 -5.23393 .45361 12 11.23)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#312A9A"></svg:stop><svg:stop offset="1" stop-color="#312A9A" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCamera202" cx="0" cy="0" r="1" gradientTransform="matrix(5.5 6.5 -6.5 5.5 6 5.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".243" stop-color="#3BD5FF"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorCamera203" x1="7.5" x2="11.5" y1="6" y2="15.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#DECBFF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCamera204" x1="14" x2="16" y1="6.5" y2="8" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset="1" stop-color="#F462AB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCamera20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
