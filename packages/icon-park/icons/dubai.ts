import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDubaiIcon],svg[icon-park-dubai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M14 4L14 44"></svg:path><svg:path d="M14.5 6C14.5 6 28 13 32 22C36 31 33 44 33 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke-linecap="round" d="M10 15H32"></svg:path><svg:path stroke-linecap="round" d="M14 22H22"></svg:path><svg:path stroke-linecap="round" d="M14 29H26"></svg:path><svg:path stroke-linecap="round" d="M14 36H27"></svg:path></svg:g>`,
})
export class IconParkDubaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
