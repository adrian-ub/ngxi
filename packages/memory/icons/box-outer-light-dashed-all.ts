import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedAllIcon],svg[memory-box-outer-light-dashed-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2v2H0V0zM2 6v4H0V6zm0 6v4H0v-4zm0 6v2h2v2H0v-4zM6 0h4v2H6zm6 0h4v2h-4zm6 0h4v4h-2V2h-2zm0 22v-2h2v-2h2v4zm-2 0h-4v-2h4zm-6 0H6v-2h4zM20 6h2v4h-2zm0 6h2v4h-2z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedAllIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
