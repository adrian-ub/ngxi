import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedUpRightIcon],svg[memory-box-light-dashed-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h2v2H0zm4 0h3v2H4zm5 0h3v3h-2v-1H9zm1 12v-2h2v2zm0-4v-3h2v3z"></svg:path>`,
})
export class MemoryBoxLightDashedUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
