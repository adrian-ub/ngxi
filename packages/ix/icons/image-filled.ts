import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixImageFilledIcon],svg[ix-image-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM173.227 206.933l-66.561 106.948v91.452h298.667v-76.587l-64-64l-65.493 65.494zm136.106-57.6c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxImageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
