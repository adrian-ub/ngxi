import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentLandscapeOutlineIcon],svg[material-symbols-stay-current-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h18q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm1-2V7H3v10zm2 0h12V7H6zm14 0h1V7h-1zM4 7H3zm16 0h1z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentLandscapeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
