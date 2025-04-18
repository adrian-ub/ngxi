import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOperaIcon],svg[devicon-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconOpera0" x1="53.327" x2="53.327" y1="2.095" y2="126.143" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#FF1B2D"></svg:stop><svg:stop offset=".614" stop-color="#FF1B2D"></svg:stop><svg:stop offset="1" stop-color="#A70014"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconOpera1" x1="85.463" x2="85.463" y1="9.408" y2="119.121" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#9C0000"></svg:stop><svg:stop offset=".7" stop-color="#FF4B4B"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconOpera0)" d="M63.996.008C28.652.008 0 28.66 0 64.008c0 34.32 27.02 62.332 60.949 63.922q1.517.072 3.047.074a63.77 63.77 0 0 0 42.652-16.285c-7.5 4.973-16.273 7.836-25.645 7.836c-15.242 0-28.891-7.562-38.07-19.484c-7.078-8.352-11.66-20.699-11.973-34.559V62.5c.313-13.859 4.895-26.207 11.973-34.559C52.113 16.016 65.762 8.457 81 8.457c9.375 0 18.148 2.863 25.652 7.84C95.383 6.219 80.531.07 64.238.008zm0 0"></svg:path><svg:path fill="url(#deviconOpera1)" d="M42.934 27.945c5.871-6.934 13.457-11.117 21.742-11.117c18.633 0 33.734 21.125 33.734 47.18s-15.102 47.18-33.734 47.18c-8.285 0-15.871-4.18-21.742-11.113c9.18 11.926 22.828 19.484 38.07 19.484c9.375 0 18.145-2.863 25.645-7.836c13.102-11.719 21.348-28.754 21.348-47.715s-8.246-35.988-21.344-47.707c-7.5-4.977-16.273-7.84-25.648-7.84c-15.242 0-28.891 7.562-38.07 19.484"></svg:path>`,
})
export class DeviconOperaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
