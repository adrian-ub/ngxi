import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCamDiskIcon],svg[ix-cam-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.667 85.333c112 0 170.666 85.333 170.666 170.667c0 83.723-56.473 167.446-164.384 170.576l-6.282.09c-112 0-256-85.333-256-170.666c0-85.334 144-170.667 256-170.667m0 42.667c-96.688 0-213.334 74.653-213.334 128S201.98 384 298.667 384c78.437 0 128-55.326 128-128s-49.563-128-128-128M320 192c35.346 0 64 28.653 64 64c0 35.346-28.654 64-64 64h-42.667c-35.346 0-64-28.654-64-64s28.654-64 64-64zm0 42.666h-42.667C265.551 234.666 256 244.218 256 256s9.551 21.333 21.333 21.333H320c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxCamDiskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
