import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPercentIcon],svg[ls-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 819L596 0h77L137 819zM174 15c95 0 173 78 173 173c0 96-78 174-173 174C78 362 0 284 0 188C0 93 78 15 174 15m0 285c61 0 111-51 111-112S235 78 174 78S63 127 63 188s50 112 111 112m402 142c96 0 174 78 174 174c0 95-78 174-174 174c-95 0-173-79-173-174c0-96 78-174 173-174m0 285c61 0 111-50 111-111s-50-111-111-111s-111 50-111 111s50 111 111 111"></svg:path>`,
})
export class LsPercentIcon {
  readonly viewBox = input("0 0 750 819")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
