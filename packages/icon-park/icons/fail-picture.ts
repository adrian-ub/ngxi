import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFailPictureIcon],svg[icon-park-fail-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="34" x="7" y="7" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M41 26L34.3877 21.0408C33.5914 20.4436 32.4772 20.5228 31.7735 21.2265L27 26"></svg:path><svg:path stroke-linecap="round" d="M7 28L18 18"></svg:path><svg:path stroke-linecap="round" d="M6 6L42 42"></svg:path></svg:g>`,
})
export class IconParkFailPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
