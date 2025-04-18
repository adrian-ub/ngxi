import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAppsBoxFillIcon],svg[memory-apps-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1M8 8V6H6v2m6 0V6h-2v2m6 0V6h-2v2m-6 4v-2H6v2m6 0v-2h-2v2m6 0v-2h-2v2m-6 4v-2H6v2m6 0v-2h-2v2m6 0v-2h-2v2Z"></svg:path>`,
})
export class MemoryAppsBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
