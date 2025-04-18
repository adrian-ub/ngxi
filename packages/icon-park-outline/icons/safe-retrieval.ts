import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSafeRetrievalIcon],svg[icon-park-outline-safe-retrieval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M7 9.127L24.008 4L41 9.127v10.515C41 30.695 34.153 40.506 24.003 44C13.849 40.506 7 30.692 7 19.638z"></svg:path><svg:path d="M24 30a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke-linecap="round" d="m29 29l6 7"></svg:path><svg:path d="M41 19.643C41 30.695 34.153 40.507 24.002 44"></svg:path></svg:g>`,
})
export class IconParkOutlineSafeRetrievalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
