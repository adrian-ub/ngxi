import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols5gMobiledataBadgeIcon],svg[material-symbols-5g-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm16-10h-3v2h1v2h-3V9h5q0-.825-.587-1.412T17 7h-3q-.825 0-1.412.588T12 9v6q0 .825.588 1.413T14 17h3q.825 0 1.413-.587T19 15zM5 17h4q.825 0 1.413-.587T11 15v-2q0-.825-.587-1.412T9 11H7V9h4V7H5v6h4v2H5z"></svg:path>`,
})
export class MaterialSymbols5gMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
