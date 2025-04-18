import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWingsuitFlyingIcon],svg[icon-park-wingsuit-flying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 20C15.29 20 8 27.28 8 36H15V44H33V36H40C40.01 27.29 32.71 20 24 20Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 36V23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 36L33 23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 44V20"></svg:path></svg:g>`,
})
export class IconParkWingsuitFlyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
