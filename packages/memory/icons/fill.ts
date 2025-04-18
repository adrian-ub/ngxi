import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFillIcon],svg[memory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H0V0h22Z"></svg:path>`,
})
export class MemoryFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
