import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCropSimpleIcon],svg[fa6-solid-crop-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32v32H32C14.3 64 0 78.3 0 96s14.3 32 32 32h32v256c0 35.3 28.7 64 64 64h224v-64H128zm256 448c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V128c0-35.3-28.7-64-64-64H160v64h224z"></svg:path>`,
})
export class Fa6SolidCropSimpleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
