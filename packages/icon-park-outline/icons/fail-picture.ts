import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFailPictureIcon],svg[icon-park-outline-fail-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="34" x="7" y="7" rx="3"></svg:rect><svg:path stroke-linecap="round" d="m41 26l-6.612-4.96a2 2 0 0 0-2.614.187L27 26M7 28l11-10M6 6l36 36"></svg:path></svg:g>`,
})
export class IconParkOutlineFailPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
