import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidModifyTwoIcon],svg[icon-park-solid-modify-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSModifyTwo0"><svg:g fill="none" stroke-width="4"><svg:rect width="40" height="30" x="4" y="9" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 9v30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 9h-8m8 30h-8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m23 31l14-14m-12 2l-2-2m14 14l-2-2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSModifyTwo0)"></svg:path>`,
})
export class IconParkSolidModifyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
