import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTestTubeIcon],svg[icon-park-twotone-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTestTube0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 4h12"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M24 44a6 6 0 0 0 6-6V10H18v28a6 6 0 0 0 6 6" clip-rule="evenodd"></svg:path><svg:path d="M24 27v1m0-10v3m-5 14h11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTestTube0)"></svg:path>`,
})
export class IconParkTwotoneTestTubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
