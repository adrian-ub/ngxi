import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlertTriangleOffIcon],svg[tabler-alert-triangle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.998 17.997a1.9 1.9 0 0 0-.255-.872L13.637 3.591a1.914 1.914 0 0 0-3.274 0l-1.04 1.736M7.83 7.82l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871H20M12 16h.01M3 3l18 18M12 7v1"></svg:path>`,
})
export class TablerAlertTriangleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
