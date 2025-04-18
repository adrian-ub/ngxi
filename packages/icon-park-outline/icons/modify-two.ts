import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineModifyTwoIcon],svg[icon-park-outline-modify-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="40" height="30" x="4" y="9" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 9v30"></svg:path><svg:path stroke-linecap="round" d="M20 9h-8m8 30h-8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 31l14-14m-12 2l-2-2m14 14l-2-2"></svg:path></svg:g>`,
})
export class IconParkOutlineModifyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
