import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidRecordVinylIcon],svg[fa-solid-record-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 152a104 104 0 1 0 104 104a104 104 0 0 0-104-104m0 128a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-272C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m0 376a128 128 0 1 1 128-128a128 128 0 0 1-128 128"></svg:path>`,
})
export class FaSolidRecordVinylIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
