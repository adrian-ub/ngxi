import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNewPictureIcon],svg[icon-park-new-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 28L16.6931 18.198C17.4389 17.5143 18.5779 17.4953 19.3461 18.1538L32 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 24L32.7735 19.2265C33.4772 18.5228 34.5914 18.4436 35.3877 19.0408L42 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 20L6 30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 20V30"></svg:path></svg:g>`,
})
export class IconParkNewPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
