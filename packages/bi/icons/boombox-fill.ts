import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biBoomboxFillIcon],svg[bi-boombox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path></svg:g>`,
})
export class BiBoomboxFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
