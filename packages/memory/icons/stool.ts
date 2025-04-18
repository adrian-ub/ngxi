import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryStoolIcon],svg[memory-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h-2v-2h-1v-4h-1V9h-1V8h-1v11h-2V8H9v1H8v4H7v4H6v2H4v-2h1v-4h1V9h1V8H5V6h12v2h-2v1h1v4h1v4h1Z"></svg:path>`,
})
export class MemoryStoolIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
