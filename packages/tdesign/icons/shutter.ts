import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShutterIcon],svg[tdesign-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.288 6.004L7.504 9.96l3.924-6.943a8.98 8.98 0 0 0-6.14 2.986M13.65 3.15L11.475 7h8.01a9 9 0 0 0-5.835-3.85M20.488 9H15.96l4.025 7.156A8.96 8.96 0 0 0 21 12c0-1.053-.18-2.063-.512-3m-1.768 8.987L16.5 14.04l-3.904 6.94a8.98 8.98 0 0 0 6.124-2.993m-8.347 2.866L12.54 17H4.515a9 9 0 0 0 5.858 3.853M3.512 15H8.04l-1.413-2.511L4.02 7.833A8.96 8.96 0 0 0 3 12c0 1.053.18 2.063.512 3m6.823 0h3.33l1.688-3l-1.688-3h-3.32l-1.697 3.001zM3.289 5.282a10.98 10.98 0 0 1 9.939-4.214A11.01 11.01 0 0 1 22.084 7.6c.59 1.348.916 2.837.916 4.4c0 2.522-.85 4.85-2.28 6.705a10.98 10.98 0 0 1-9.92 4.23A11.01 11.01 0 0 1 1.916 16.4A11 11 0 0 1 1 12c0-2.528.854-4.86 2.289-6.718"></svg:path>`,
})
export class TdesignShutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
