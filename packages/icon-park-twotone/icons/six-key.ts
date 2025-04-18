import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSixKeyIcon],svg[icon-park-twotone-six-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSixKey0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#555" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M24.5 33a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.596 17.74C28.778 15.545 26.804 14 24.5 14c-3.038 0-5.5 2.686-5.5 6v7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSixKey0)"></svg:path>`,
})
export class IconParkTwotoneSixKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
