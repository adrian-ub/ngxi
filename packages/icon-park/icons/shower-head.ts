import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShowerHeadIcon],svg[icon-park-shower-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M27 20V22H9V20C9 16.6863 13.0294 14 18 14C22.9706 14 27 16.6863 27 20Z"></svg:path><svg:path d="M42 44V12.5C42 7.80558 36.6274 4 30 4C23.3726 4 18 7.80558 18 12.5V14"></svg:path><svg:path d="M18 29L18 28"></svg:path><svg:path d="M10.1711 28.0303L9.8291 28.97"></svg:path><svg:path d="M4.17112 43.0303L3.8291 43.97"></svg:path><svg:path d="M18 44L18 43"></svg:path><svg:path d="M18 37L18 35"></svg:path><svg:path d="M7.34224 35.0603L6.6582 36.9397"></svg:path></svg:g>`,
})
export class IconParkShowerHeadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
