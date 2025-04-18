import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEnterKeyOneIcon],svg[icon-park-outline-enter-key-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 23V5h20v38H5V23z"></svg:path><svg:path d="M33 13v20H13"></svg:path><svg:path d="m17 29l-4 4l4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineEnterKeyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
