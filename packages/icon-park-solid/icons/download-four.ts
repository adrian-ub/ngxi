import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDownloadFourIcon],svg[icon-park-solid-download-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" stroke-linejoin="round" d="M24 29L12 17h8V6h8v11h8z" clip-rule="evenodd"></svg:path><svg:path d="M42 37H6m28 7H14"></svg:path></svg:g>`,
})
export class IconParkSolidDownloadFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
