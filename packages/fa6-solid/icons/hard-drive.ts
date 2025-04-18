import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidHardDriveIcon],svg[fa6-solid-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v184.4c-17-15.2-39.4-24.4-64-24.4H64c-24.6 0-47 9.2-64 24.4zm64 192h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64m256 128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0"></svg:path>`,
})
export class Fa6SolidHardDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
