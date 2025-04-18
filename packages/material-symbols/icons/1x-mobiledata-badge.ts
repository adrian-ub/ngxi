import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols1xMobiledataBadgeIcon],svg[material-symbols-1x-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm4-4h2V7H5v2h2zm4.5 0h2l1.75-3.175L17 17h2l-2.75-5L19 7h-2l-1.75 3.175L13.5 7h-2l2.75 5z"></svg:path>`,
})
export class MaterialSymbols1xMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
