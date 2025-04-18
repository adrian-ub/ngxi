import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDropboxIcon],svg[icon-park-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 10L12 18L24 26L36 18L24 10Z"></svg:path><svg:path d="M24 10L36 18L41 11L30 4L24 10Z"></svg:path><svg:path d="M24 10L12 18L7 11L18 4L24 10Z"></svg:path><svg:path d="M43 22L36 18L24 26L31 31L43 22Z"></svg:path><svg:path d="M5 22L12 18L24 26L17 31L5 22Z"></svg:path><svg:path stroke-linecap="round" d="M36 28V37L24 44L12 37V28"></svg:path></svg:g>`,
})
export class IconParkDropboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
