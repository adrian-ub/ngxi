import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenInNewDownIcon],svg[material-symbols-open-in-new-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v7h-2V5H5v14h7v2zm9 0v-2h3.6L8.3 9.7l1.4-1.4l9.3 9.275V14h2v7z"></svg:path>`,
})
export class MaterialSymbolsOpenInNewDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
