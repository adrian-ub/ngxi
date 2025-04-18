import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEarthIcon],svg[icon-park-outline-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path><svg:path d="M4 24h40"></svg:path><svg:path d="M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20" clip-rule="evenodd"></svg:path><svg:path d="M9.858 10.142A19.94 19.94 0 0 0 24 16a19.94 19.94 0 0 0 14.142-5.858m0 27.716A19.94 19.94 0 0 0 24 32a19.94 19.94 0 0 0-14.142 5.858"></svg:path></svg:g>`,
})
export class IconParkOutlineEarthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
