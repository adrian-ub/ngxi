import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClapperboardCircleFilledIcon],svg[pepicons-pop-clapperboard-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClapperboardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.707 9.08a1 1 0 0 1 .763-1.192L19.123 4.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.192L5.54 12.773a1 1 0 0 1-1.19-.763zm2.168.548l.213.977l12.7-2.78l-.214-.977z"></svg:path><svg:path d="m12.935 10.698l-2.596-2.503l1.389-1.44l2.595 2.503zm-3.908.855L6.432 9.05L7.82 7.61l2.595 2.504zm7.815-1.711L14.247 7.34l1.388-1.44l2.595 2.504zm-4.01 5.713l2-3l-1.664-1.11l-2 3zm4 0l2-3l-1.664-1.11l-2 3zm-8 0l2-3l-1.664-1.11l-2 3z"></svg:path><svg:path d="M4.5 12a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zm2 1v7h13v-7z"></svg:path><svg:path d="M21 16H5v-2h16z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClapperboardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClapperboardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
