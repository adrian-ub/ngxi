import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCubeIcon],svg[memory-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-10V9h2V8h2V7h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v1h2v1h2v1h2v1m0 8v-7H8v-1H6V9H4v7h2v1h2v1m6 0v-1h2v-1h2V9h-2v1h-2v1h-2v7Z"></svg:path>`,
})
export class MemoryCubeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
