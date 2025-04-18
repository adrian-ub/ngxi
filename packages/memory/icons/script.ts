import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryScriptIcon],svg[memory-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1H5v1H4v13h2V3h9v16h-2v-1h-1v-1H1v3h1v1h14v-1h1V3h2v2h2V2h-1"></svg:path>`,
})
export class MemoryScriptIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
