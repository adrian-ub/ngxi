import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularFaceFlushedIcon],svg[fa6-regular-face-flushed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256a208 208 0 1 1-416 0a208 208 0 1 1 416 0M256 0a256 256 0 1 0 0 512a256 256 0 1 0 0-512m-95.6 248a24 24 0 1 0 0-48a24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0a24 24 0 1 0 48 0M192 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-32-160a48 48 0 1 1 0 96a48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160a80 80 0 1 0 0 160m144-80a48 48 0 1 1 96 0a48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0a80 80 0 1 0 160 0"></svg:path>`,
})
export class Fa6RegularFaceFlushedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
