import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRecordVinylIcon],svg[fa6-solid-record-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256-96a96 96 0 1 1 0 192a96 96 0 1 1 0-192m0 224a128 128 0 1 0 0-256a128 128 0 1 0 0 256m0-96a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidRecordVinylIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
