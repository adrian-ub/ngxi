import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCropIcon],svg[fa6-solid-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64H160v64h178.7L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32v32H32C14.3 64 0 78.3 0 96s14.3 32 32 32h32v256c0 35.3 28.7 64 64 64h224v-64H173.3L384 173.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"></svg:path>`,
})
export class Fa6SolidCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
