import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsTabletAndroidIcon],svg[flat-color-icons-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474F" d="M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#BBDEFB" d="M36 6H12c-.6 0-1 .4-1 1v31c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path><svg:path fill="#78909C" d="M21 41h6v2h-6z"></svg:path>`,
})
export class FlatColorIconsTabletAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
