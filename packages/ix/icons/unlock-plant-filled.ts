import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUnlockPlantFilledIcon],svg[ix-unlock-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119V322.69a85 85 0 0 0-27.883 12.927a85.7 85.7 0 0 0-24.697 27.051l-139.42-.002v64.001H64V64zm341.334 341.333c0-35.346-28.654-64-64-64c-27.866 0-51.573 17.81-60.359 42.667H234.667v42.667H256v42.666h64v-42.666h46.308c8.786 24.857 32.493 42.666 60.359 42.666c35.346 0 64-28.653 64-64m-96 0c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxUnlockPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
