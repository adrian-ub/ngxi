import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryHelpBoxFillIcon],svg[memory-help-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-6-6v-1h1v-1h1V7h-1V6H9v1H8v3h2V8h2v2h-1v1h-1v2m2 3v-2h-2v2Z"></svg:path>`,
})
export class MemoryHelpBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
