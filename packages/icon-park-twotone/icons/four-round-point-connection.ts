import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFourRoundPointConnectionIcon],svg[icon-park-twotone-four-round-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFourRoundPointConnection0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M6.283 14.71A19.9 19.9 0 0 0 4.4 20M14.71 6.283A19.9 19.9 0 0 1 20 4.4"></svg:path><svg:path fill="#555" d="M38 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M33.29 6.283A19.9 19.9 0 0 0 28 4.4m13.716 10.31A19.9 19.9 0 0 1 43.6 20"></svg:path><svg:path fill="#555" d="M38 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M41.716 33.29A19.9 19.9 0 0 0 43.6 28M33.29 41.716A19.9 19.9 0 0 1 28 43.6"></svg:path><svg:path fill="#555" d="M10 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M14.71 41.716A19.9 19.9 0 0 0 20 43.6M6.283 33.29A19.9 19.9 0 0 1 4.4 28M24 30V18m-6 6h12z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFourRoundPointConnection0)"></svg:path>`,
})
export class IconParkTwotoneFourRoundPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
