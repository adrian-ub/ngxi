import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonIcon],svg[material-symbols-stack-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 21.875q-.825.125-1.487-.387T3.45 20.15L2.125 9.225q-.1-.825.4-1.475T3.85 7L5 6.85V15q0 1.65 1.175 2.825T9 19h9.3q-.15.6-.6 1.038t-1.1.512zM9 17q-.825 0-1.412-.587T7 15V4q0-.825.588-1.412T9 2h11q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17zm5.5-3.5l3.5-2v-4l-3.5-2l-3.5 2v4z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
