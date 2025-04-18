import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiCalendarIcon],svg[ooui-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3V1h-2v2H7V1H5v2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 14H2V8h16zm-2-6h-4v4h4z"></svg:path>`,
})
export class OouiCalendarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
