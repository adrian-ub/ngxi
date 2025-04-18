import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPrismOffIcon],svg[tabler-prism-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12v10m5.957-4.048l-4.937 3.703a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4m3-1h12a1 1 0 0 1 1 1v11.17q0 .377-.109.729"></svg:path><svg:path d="M12.688 8.7a1.7 1.7 0 0 0 .357-.214L19.7 3.3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPrismOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
