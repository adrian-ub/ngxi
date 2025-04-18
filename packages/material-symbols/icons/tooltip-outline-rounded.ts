import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTooltipOutlineRoundedIcon],svg[material-symbols-tooltip-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18h-5.325l-1.85 2.75q-.15.225-.362.338T12 21.2t-.462-.112t-.363-.338L9.325 18zm8 .4l1.6-2.4H20V4H4v12h6.4zm0-8.4"></svg:path>`,
})
export class MaterialSymbolsTooltipOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
