import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSafeRetrievalIcon],svg[icon-park-twotone-safe-retrieval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSafeRetrieval0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M7 9.127L24.008 4L41 9.127v10.515C41 30.695 34.153 40.506 24.003 44C13.849 40.506 7 30.692 7 19.638z"></svg:path><svg:path fill="#555" d="M24 30a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke-linecap="round" d="m29 29l6 7"></svg:path><svg:path d="M41 19.643C41 30.695 34.153 40.507 24.002 44"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSafeRetrieval0)"></svg:path>`,
})
export class IconParkTwotoneSafeRetrievalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
