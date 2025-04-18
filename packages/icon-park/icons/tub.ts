import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTubIcon],svg[icon-park-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M40 23V12C40 8.13401 36.866 5 33 5V5C29.134 5 26 8.13401 26 12V13"></svg:path><svg:path fill="#2F88FF" d="M40 29V23H8V29C8 33.4183 11.5817 37 16 37H32C36.4183 37 40 33.4183 40 29Z"></svg:path><svg:path d="M43 23H5"></svg:path><svg:path stroke-linejoin="round" d="M17 37L13 43"></svg:path><svg:path stroke-linejoin="round" d="M31 37L35 43"></svg:path></svg:g>`,
})
export class IconParkTubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
