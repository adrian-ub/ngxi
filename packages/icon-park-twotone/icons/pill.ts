import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePillIcon],svg[icon-park-twotone-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPill0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M5.615 22.585a3 3 0 0 1 0-4.242L18.343 5.615a3 3 0 0 1 4.243 0l19.799 19.799a3 3 0 0 1 0 4.242L29.657 42.384a3 3 0 0 1-4.243 0z"></svg:path><svg:circle cx="14.808" cy="20.465" r="2" fill="#fff" transform="rotate(-45 14.808 20.465)"></svg:circle><svg:circle cx="23.293" cy="28.949" r="2" fill="#fff" transform="rotate(-45 23.293 28.95)"></svg:circle><svg:circle cx="19.05" cy="24.707" r="2" fill="#fff" transform="rotate(-45 19.05 24.707)"></svg:circle><svg:circle cx="27.536" cy="33.193" r="2" fill="#fff" transform="rotate(-45 27.536 33.193)"></svg:circle><svg:circle cx="20.464" cy="14.807" r="2" fill="#fff" transform="rotate(-45 20.464 14.807)"></svg:circle><svg:circle cx="28.95" cy="23.293" r="2" fill="#fff" transform="rotate(-45 28.95 23.293)"></svg:circle><svg:circle cx="24.707" cy="19.051" r="2" fill="#fff" transform="rotate(-45 24.707 19.05)"></svg:circle><svg:circle cx="33.193" cy="27.535" r="2" fill="#fff" transform="rotate(-45 33.193 27.535)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPill0)"></svg:path>`,
})
export class IconParkTwotonePillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
