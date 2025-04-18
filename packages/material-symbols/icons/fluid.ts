import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidIcon],svg[material-symbols-fluid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 23q-.825 0-1.412-.587T11 21v-2.075q-2.575-.35-4.288-2.312T5 12V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v9q0 2.65-1.713 4.613T13 18.925V21h6v2zm.75-10h3.15q.05-.25.075-.488T17 12v-1h-4V9h4V7h-5V5h5V3H7v8h2.75q.825 0 1.563.375T12.55 12.4q.2.275.525.438t.675.162"></svg:path>`,
})
export class MaterialSymbolsFluidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
