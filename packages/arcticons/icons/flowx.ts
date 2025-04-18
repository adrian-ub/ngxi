import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlowxIcon],svg[arcticons-flowx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24 4.5l-12.604 18c-4.901 7-.396 21 12.604 21s17.505-14 12.604-21z"></svg:path><svg:path d="m24 13.5l-7 9.997C13.097 29.072 18 36.5 24 36.5s11.002-7.287 7.002-13zm0 0l3-4.284"></svg:path><svg:path d="M29.69 42.47c-6.041.486-13.372-5.64-14.054-13.974"></svg:path></svg:g>`,
})
export class ArcticonsFlowxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
