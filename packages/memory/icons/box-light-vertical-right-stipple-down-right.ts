import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleDownRightIcon],svg[memory-box-light-vertical-right-stipple-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
