import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRainbowIcon],svg[fa6-solid-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 96C178.6 96 64 210.6 64 352v96c0 17.7-14.3 32-32 32S0 465.7 0 448v-96C0 175.3 143.3 32 320 32s320 143.3 320 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-141.4-114.6-256-256-256m0 192c-35.3 0-64 28.7-64 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-70.7 57.3-128 128-128s128 57.3 128 128v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-35.3-28.7-64-64-64m-160 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-88.4-71.6-160-160-160s-160 71.6-160 160"></svg:path>`,
})
export class Fa6SolidRainbowIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
