import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlertCircleOffIcon],svg[tabler-alert-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.644 5.629A9 9 0 1 0 18.359 18.37m1.693-2.349A9 9 0 0 0 7.965 3.953M12 7v1m0 8h.01M3 3l18 18"></svg:path>`,
})
export class TablerAlertCircleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
