import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuUpIcon],svg[memory-box-light-vertical-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h-2V0h2m5 14H5v-2h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v1h1m-5 10h-2v-6h2m1-4v-1h-1v-1h-2v1H9v1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
