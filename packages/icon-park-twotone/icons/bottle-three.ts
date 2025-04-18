import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBottleThreeIcon],svg[icon-park-twotone-bottle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBottleThree0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.188 10h5.625L33 21.18V44H15V21.18z"></svg:path><svg:path fill="#555" d="M20 4h8v6h-8z"></svg:path><svg:rect width="6" height="12" x="21" y="23" fill="#555" rx="3"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBottleThree0)"></svg:path>`,
})
export class IconParkTwotoneBottleThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
