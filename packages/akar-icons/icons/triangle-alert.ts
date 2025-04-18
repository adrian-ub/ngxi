import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsTriangleAlertIcon],svg[akar-icons-triangle-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M12 9v5m0 3.5v.5"></svg:path><svg:path stroke-linejoin="round" d="M2.232 19.016L10.35 3.052c.713-1.403 2.59-1.403 3.302 0l8.117 15.964C22.45 20.36 21.544 22 20.116 22H3.883c-1.427 0-2.334-1.64-1.65-2.984"></svg:path></svg:g>`,
})
export class AkarIconsTriangleAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
