import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShellIcon],svg[streamline-shell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.497 11.5v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1m.278-7.649a2.5 2.5 0 0 0-3.572 3.147q-.187.241-.345.47c-.572.829-.202 1.898.678 2.387l2.96 1.645h5.047l2.924-1.642c.875-.49 1.242-1.557.672-2.383a10 10 0 0 0-.35-.477a2.5 2.5 0 0 0-3.572-3.147a2.5 2.5 0 0 0-4.442 0M8.497 7l.724-3.154m3.625 3.014L9.996 9M5.497 7l-.725-3.154M1.147 6.86L3.997 9"></svg:path>`,
})
export class StreamlineShellIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
