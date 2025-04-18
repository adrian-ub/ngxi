import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTheSingleShoulderBagIcon],svg[icon-park-twotone-the-single-shoulder-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTheSingleShoulderBag0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 27c0-8.819-1.22-23-4-23c-3.429 0-4 14.181-4 23m-5 0h18v17H15z"></svg:path><svg:path fill="#555" d="M15 27h18l-5.294 9h-7.941z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTheSingleShoulderBag0)"></svg:path>`,
})
export class IconParkTwotoneTheSingleShoulderBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
