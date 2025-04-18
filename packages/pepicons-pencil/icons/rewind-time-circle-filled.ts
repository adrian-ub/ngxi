import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindTimeCircleFilledIcon],svg[pepicons-pencil-rewind-time-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRewindTimeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.604 8.45a6.44 6.44 0 0 0-1.882 5.278a.5.5 0 0 1-.995.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088"></svg:path><svg:path d="M6.594 14.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"></svg:path><svg:path d="M5.82 14.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M13 9.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M16.5 13.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRewindTimeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRewindTimeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
