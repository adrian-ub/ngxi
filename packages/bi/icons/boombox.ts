import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biBoomboxIcon],svg[bi-boombox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M11.5 13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M7 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path><svg:path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z"></svg:path></svg:g>`,
})
export class BiBoomboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
