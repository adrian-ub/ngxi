import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLockedFilledIcon],svg[tdesign-system-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h12v-2c0-.698.11-1.371.314-2.002H3v-10h18v5.676c.72.17 1.395.46 2 .848zM3 20h10v2H3z"></svg:path><svg:path fill="currentColor" d="M22.752 14.75v.75H24V22h-9v-6.5h1.252v-.75a3.25 3.25 0 1 1 6.5 0m-2 0a1.25 1.25 0 0 0-2.5 0v.75h2.5z"></svg:path>`,
})
export class TdesignSystemLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
