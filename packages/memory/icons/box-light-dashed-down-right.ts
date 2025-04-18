import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedDownRightIcon],svg[memory-box-light-dashed-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v2h-2V0zm0 4v3h-2V4zm0 5v3H9v-2h1V9zM.002 10H2v2H.002zM4 10h3v2H4z"></svg:path>`,
})
export class MemoryBoxLightDashedDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
