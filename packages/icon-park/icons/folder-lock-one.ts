import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderLockOneIcon],svg[icon-park-folder-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:rect width="14" height="8" x="29" y="34" fill="#2F88FF"></svg:rect><svg:path d="M39 34V31C39 29.3431 37.6569 28 36 28C34.3431 28 33 29.3431 33 31V34"></svg:path></svg:g>`,
})
export class IconParkFolderLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
