import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOpenSourceFillIcon],svg[ri-open-source-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10c0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55A3 3 0 0 0 12 9a3 3 0 0 0-1.404 5.652l-2.518 6.55A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2"></svg:path>`,
})
export class RiOpenSourceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
