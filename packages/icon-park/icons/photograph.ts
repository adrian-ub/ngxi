import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPhotographIcon],svg[icon-park-photograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="bevel" d="M34 13L34 6C34 4.89543 33.1046 4 32 4L8 4C6.89543 4 6 4.89543 6 6L6 34C6 35.1046 6.89543 36 8 36L23 36"></svg:path><svg:path stroke-linejoin="round" d="M28.0005 42C21 38 24.3318 32.2257 22.9772 31C21.3247 29.5046 20.3874 28.1121 19.9996 26C19.6118 23.8878 21.0701 21.4737 22.9774 23C24.8847 24.5263 28 31 28 31L30 29L31 18C31 18 30 14 30 12C30 9.99999 34 13 36 16C36 26.4418 37.4995 36 41.9992 44"></svg:path><svg:path stroke-linejoin="round" d="M25 17.4L21 11L13 27H20"></svg:path><svg:path stroke-linejoin="round" d="M6 22L12 11L17 18"></svg:path></svg:g>`,
})
export class IconParkPhotographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
