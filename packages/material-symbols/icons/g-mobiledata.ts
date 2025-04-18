import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGMobiledataIcon],svg[material-symbols-g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-.825 0-1.412-.587T7 15V9q0-.825.588-1.412T9 7h5q.825 0 1.413.588T16 9H9v6h5v-2h-2v-2h4v4q0 .825-.587 1.413T14 17z"></svg:path>`,
})
export class MaterialSymbolsGMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
