import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHPlusMobiledataBadgeIcon],svg[material-symbols-h-plus-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm1.5-4h2v-4h4v4h2V7h-2v4h-4V7h-2zm11-2h2v-2h2v-2h-2V9h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsHPlusMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
