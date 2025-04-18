import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMenuUpFillIcon],svg[memory-menu-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v1h12v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-2v1H9v1H8v1H7v1H6v1"></svg:path>`,
})
export class MemoryMenuUpFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
