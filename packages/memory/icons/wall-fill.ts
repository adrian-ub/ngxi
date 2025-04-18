import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWallFillIcon],svg[memory-wall-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h6v4H5m8-4h5v4h-5m-8 8v4h6v-4m2 0h5v4h-5M8 9H3v4h5m2-4h10v4H10"></svg:path>`,
})
export class MemoryWallFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
