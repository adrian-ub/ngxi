import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryPlusIcon],svg[memory-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h-2v-5H5v-2h5V5h2v5h5v2h-5Z"></svg:path>`,
})
export class MemoryPlusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
