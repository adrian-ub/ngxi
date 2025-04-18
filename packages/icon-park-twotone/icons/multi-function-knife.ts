import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMultiFunctionKnifeIcon],svg[icon-park-twotone-multi-function-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMultiFunctionKnife0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M30 10a6 6 0 0 0-12 0v28a6 6 0 0 0 12 0zm0 10.314l7.243 7.242A4 4 0 0 0 42.9 21.9L30 9z"></svg:path><svg:path fill="#555" d="m18.071 27.414l-7.243-7.242a4 4 0 1 0-5.656 5.656l12.9 12.9z"></svg:path><svg:path stroke-linecap="round" d="M24 10v1m0 26v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMultiFunctionKnife0)"></svg:path>`,
})
export class IconParkTwotoneMultiFunctionKnifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
