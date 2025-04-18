import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryToggleSwitchOnIcon],svg[memory-toggle-switch-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h16v1h1v1h1v8h-1v1h-1v1H3v-1H2v-1H1V7h1V6h1zm10 3v1h-1v4h1v1h4v-1h1V9h-1V8z"></svg:path>`,
})
export class MemoryToggleSwitchOnIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
