import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols4gMobiledataIcon],svg[material-symbols-4g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-3H3V7h2v5h2V7h2v5h2v2H9v3zm14-6v4q0 .825-.587 1.413T19 17h-5q-.825 0-1.412-.587T12 15V9q0-.825.588-1.412T14 7h5q.825 0 1.413.588T21 9h-7v6h5v-2h-2.5v-2z"></svg:path>`,
})
export class MaterialSymbols4gMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
