import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBagPersonalFillIcon],svg[memory-bag-personal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h1V6h2V5h1V2h1V1h6v1h1v3h1v1h2v2h1v12h-1v1H4v-1H3zm6-5v2h4V3zm8 11H5v1h2v2h1v-2h9zm-5-3h1V9h-1V8h-2v1H9v2h1v1h2z"></svg:path>`,
})
export class MemoryBagPersonalFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
