import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeveloperModeTvIcon],svg[material-symbols-developer-mode-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2zM4.8 11l2.6-2.6L6 7l-4 4l4 4l1.4-1.4zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsDeveloperModeTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
