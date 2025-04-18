import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFourRoundPointConnectionIcon],svg[icon-park-solid-four-round-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M6.283 14.71A19.9 19.9 0 0 0 4.4 20M14.71 6.283A19.9 19.9 0 0 1 20 4.4"></svg:path><svg:path fill="currentColor" d="M38 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M33.29 6.283A19.9 19.9 0 0 0 28 4.4m13.716 10.31A19.9 19.9 0 0 1 43.6 20"></svg:path><svg:path fill="currentColor" d="M38 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M41.716 33.29A19.9 19.9 0 0 0 43.6 28M33.29 41.716A19.9 19.9 0 0 1 28 43.6"></svg:path><svg:path fill="currentColor" d="M10 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M14.71 41.716A19.9 19.9 0 0 0 20 43.6M6.283 33.29A19.9 19.9 0 0 1 4.4 28M24 30V18m-6 6h12z"></svg:path></svg:g>`,
})
export class IconParkSolidFourRoundPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
