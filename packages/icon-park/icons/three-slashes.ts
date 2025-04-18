import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeSlashesIcon],svg[icon-park-three-slashes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10L42 4V11L6 17V10Z"></svg:path><svg:path d="M6 24L42 18V25L6 31V24Z"></svg:path><svg:path d="M6 38L42 32V39L6 45V38Z"></svg:path></svg:g>`,
})
export class IconParkThreeSlashesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
