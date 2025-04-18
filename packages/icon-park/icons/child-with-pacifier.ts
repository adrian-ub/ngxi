import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChildWithPacifierIcon],svg[icon-park-child-with-pacifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42C33.3888 42 41 34.3888 41 25C41 15.6112 33.3888 8 24 8C14.6112 8 7 15.6112 7 25C7 34.3888 14.6112 42 24 42Z"></svg:path><svg:path stroke-linecap="round" d="M33 21L31 22L29 21"></svg:path><svg:path stroke-linecap="round" d="M19 21L17 22L15 21"></svg:path><svg:path stroke-linecap="round" d="M24 38V44"></svg:path><svg:path stroke-linecap="round" d="M24 8C23.75 7 22 4 18 4"></svg:path><svg:path stroke-linecap="round" d="M24 8C24.0833 7 24.6 4.8 26 4"></svg:path><svg:path stroke-linecap="round" d="M31.9752 40C31.9752 34 31.9752 31 23.9998 31C15.9998 31 16.0244 34 16.0244 40"></svg:path><svg:path stroke-linecap="round" d="M5 23V27"></svg:path><svg:path stroke-linecap="round" d="M43 23V27"></svg:path></svg:g>`,
})
export class IconParkChildWithPacifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
