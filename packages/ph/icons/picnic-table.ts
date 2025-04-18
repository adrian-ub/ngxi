import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableIcon],svg[ph-picnic-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128h-47.06l-28-56H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h19.06l-28 56H8a8 8 0 0 0 0 16h39.06l-22.22 44.42a8 8 0 0 0 3.58 10.73A7.9 7.9 0 0 0 32 200a8 8 0 0 0 7.17-4.42L64.94 144h126.12l25.78 51.58A8 8 0 0 0 224 200a7.9 7.9 0 0 0 3.57-.85a8 8 0 0 0 3.58-10.73L208.94 144H248a8 8 0 0 0 0-16m-175.06 0l28-56h54.12l28 56Z"></svg:path>`,
})
export class PhPicnicTableIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
