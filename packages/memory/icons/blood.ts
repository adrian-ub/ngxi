import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBloodIcon],svg[memory-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h1v-2H5Zm1 1h1v-1H6Zm8 4H8v-1H6v-1H5v-1H4v-2H3v-3h1v-1h1v-2h1V9h1V7h1V5h1V3h1V1h2v2h1v2h1v2h1v2h1v1h1v2h1v1h1v3h-1v2h-1v1h-1v1h-2Zm-5-3v-1H7v1Zm3 1v-1H9v1Z"></svg:path>`,
})
export class MemoryBloodIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
