import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedOutlineRoundedIcon],svg[material-symbols-window-closed-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12v-6H6zm0 2q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm0-10h5v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h5V5H6zm0 8h12z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
