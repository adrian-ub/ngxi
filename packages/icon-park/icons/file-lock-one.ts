import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileLockOneIcon],svg[icon-park-file-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:rect width="14" height="8" x="28" y="34" fill="#2F88FF"></svg:rect><svg:path d="M38 34V31C38 29.3431 36.6569 28 35 28C33.3431 28 32 29.3431 32 31V34"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
