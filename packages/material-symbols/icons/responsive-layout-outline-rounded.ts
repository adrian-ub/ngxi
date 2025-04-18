import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsResponsiveLayoutOutlineRoundedIcon],svg[material-symbols-responsive-layout-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-9q0-.825.588-1.412T5 8h3V5q0-.825.588-1.412T10 3h9q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m13 0h3V5h-9v3h4q.825 0 1.413.588T16 10zm-6 0h4v-9h-4zm-5 0h3v-9H5z"></svg:path>`,
})
export class MaterialSymbolsResponsiveLayoutOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
