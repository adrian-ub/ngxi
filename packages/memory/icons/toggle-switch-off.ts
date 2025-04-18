import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryToggleSwitchOffIcon],svg[memory-toggle-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h4v1h1v4H9v1H5v-1H4V9h1zm14-3v1h1v1h1v8h-1v1h-1v1H3v-1H2v-1H1V7h1V6h1V5zm-1 2H4v1H3v6h1v1h14v-1h1V8h-1z"></svg:path>`,
})
export class MemoryToggleSwitchOffIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
