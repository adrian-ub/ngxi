import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDeleteThreeIcon],svg[icon-park-twotone-delete-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDeleteThree0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 31l14-14m-12 2l-2-2m14 14l-2-2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDeleteThree0)"></svg:path>`,
})
export class IconParkTwotoneDeleteThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
