import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMinusBoxFillIcon],svg[memory-minus-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-2-8v-2H6v2Z"></svg:path>`,
})
export class MemoryMinusBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
