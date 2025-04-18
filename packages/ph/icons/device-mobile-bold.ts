import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileBoldIcon],svg[ph-device-mobile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28M76 76h104v104H76Zm4-40h96a4 4 0 0 1 4 4v12H76V40a4 4 0 0 1 4-4m96 184H80a4 4 0 0 1-4-4v-12h104v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDeviceMobileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
