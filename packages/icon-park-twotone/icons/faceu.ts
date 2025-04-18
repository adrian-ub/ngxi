import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFaceuIcon],svg[icon-park-twotone-faceu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFaceu0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-width="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 12v4c2.667.833 9 3 9 10s-6 10-12 10s-12-3-12-10c0-8 9.667-12.833 15-14"></svg:path><svg:ellipse cx="29" cy="26" fill="#fff" rx="3" ry="4"></svg:ellipse><svg:ellipse cx="19" cy="26" fill="#fff" rx="3" ry="4"></svg:ellipse></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFaceu0)"></svg:path>`,
})
export class IconParkTwotoneFaceuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
