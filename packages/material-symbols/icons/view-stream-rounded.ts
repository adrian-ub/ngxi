import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewStreamRoundedIcon],svg[material-symbols-view-stream-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19q-.825 0-1.412-.587T3 17v-2q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v2q0 .825-.587 1.413T19 19zm0-8q-.825 0-1.412-.587T3 9V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v2q0 .825-.587 1.413T19 11z"></svg:path>`,
})
export class MaterialSymbolsViewStreamRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
