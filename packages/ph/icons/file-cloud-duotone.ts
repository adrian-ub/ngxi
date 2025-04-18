import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileCloudDuotoneIcon],svg[ph-file-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Zm-100 48a44 44 0 0 0-42.34 32H60a28 28 0 0 0 0 56h48a44 44 0 0 0 0-88" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM108 128a52 52 0 0 0-48 32a36 36 0 0 0 0 72h48a52 52 0 0 0 0-104m0 88H60a20 20 0 0 1-3.81-39.64a8 8 0 0 0 16 .36a38 38 0 0 1 1.06-6.09a8 8 0 0 0 .27-1A36 36 0 1 1 108 216"></svg:path></svg:g>`,
})
export class PhFileCloudDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
