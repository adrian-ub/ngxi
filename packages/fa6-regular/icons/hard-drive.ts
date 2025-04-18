import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularHardDriveIcon],svg[fa6-regular-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 80c-8.8 0-16 7.2-16 16v162c5.1-1.3 10.5-2 16-2h384c5.5 0 10.9.7 16 2V96c0-8.8-7.2-16-16-16zM48 320v96c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m-48 0V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm280 48a24 24 0 1 1 48 0a24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6RegularHardDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
