import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedVerticalIcon],svg[memory-box-light-dashed-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 7h-2V4h2m0 9h-2V9h2m0 9h-2v-3h2m0 7h-2v-2h2Z"></svg:path>`,
})
export class MemoryBoxLightDashedVerticalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
