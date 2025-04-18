import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandOperaFilledIcon],svg[tabler-brand-opera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6c-2.285 0-3.915 2.619-3.997 5.752L8 12c0 3.242 1.655 6 4 6s4-2.758 4-6s-1.655-6-4-6"></svg:path>`,
})
export class TablerBrandOperaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
