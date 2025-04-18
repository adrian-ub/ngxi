import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIwatchOneIcon],svg[icon-park-iwatch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="22" height="24" x="13" y="12" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 12V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 12L27 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 30V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 36L27 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34.9998 23.9341L29 23.9999"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 21L35 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 24L13.0003 24.0659"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 21L13 27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 12V4H17V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 36V43C31 43.5523 30.5523 44 30 44H18C17.4477 44 17 43.5523 17 43V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 20V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M41 20V28"></svg:path></svg:g>`,
})
export class IconParkIwatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
