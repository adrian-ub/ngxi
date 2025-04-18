import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInvalidFilesIcon],svg[icon-park-invalid-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M34 25C34 30.5228 29.5228 35 24 35C18.4772 35 14 30.5228 14 25C14 19.4772 18.4772 15 24 15C26.6582 15 29.0742 16.0372 30.8653 17.729C32.7955 19.5521 34 22.1354 34 25Z"></svg:path><svg:path stroke="#fff" d="M17 18L31 32"></svg:path><svg:path stroke="#fff" d="M34 25C34 30.5228 29.5228 35 24 35M14 25C14 19.4772 18.4772 15 24 15"></svg:path></svg:g>`,
})
export class IconParkInvalidFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
