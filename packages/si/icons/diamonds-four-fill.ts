import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDiamondsFourFillIcon],svg[si-diamonds-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siDiamondsFourFill0)"><svg:path d="M13.839 1.11a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zM6.768 8.182a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676zm7.071 7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zm7.071-7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676z"></svg:path></svg:g><svg:defs><svg:clippath id="siDiamondsFourFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiDiamondsFourFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
