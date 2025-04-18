import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnterpriseOffOutlineIcon],svg[material-symbols-enterprise-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L18.2 21H4q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h2l2 2H4v11h12.175L.7 3.5l1.4-1.4l19.8 19.8zm1.5-4.15l-2-2V8h-9.15L8 5.15V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8zM10 6h4V4h-4zm.7 7.5"></svg:path>`,
})
export class MaterialSymbolsEnterpriseOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
