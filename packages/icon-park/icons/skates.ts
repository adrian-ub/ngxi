import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSkatesIcon],svg[icon-park-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 5H31V13H5V5Z"></svg:path><svg:path fill="#2F88FF" d="M9 36V13H27V23C41 23 41 32 41 36H9Z"></svg:path><svg:rect width="36" height="6" x="7" y="36"></svg:rect></svg:g>`,
})
export class IconParkSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
