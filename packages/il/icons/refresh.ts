import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilRefreshIcon],svg[il-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M403 3q67 0 127 24t106 68t74 102t31 126q3 72-22 136t-71 112t-108 76t-135 28q-58 0-110-19t-95-51q-4-3-4-9t3-9l50-49q7-7 15-2q30 22 66 34t75 12q54 0 101-22t81-59t50-86t10-104q-5-41-23-78t-46-65t-64-47t-78-24q-54-6-102 9t-86 48t-60 76t-25 97h69L116 466L0 327h70q2-67 29-126t72-103t105-70T403 3"></svg:path>`,
})
export class IlRefreshIcon {
  readonly viewBox = input("0 0 750 810")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
