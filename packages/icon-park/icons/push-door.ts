import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPushDoorIcon],svg[icon-park-push-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M6 6H42V42H6"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M6 6V42L24 36V12L6 6Z"></svg:path><svg:path stroke="#fff" d="M18 22V26"></svg:path></svg:g>`,
})
export class IconParkPushDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
