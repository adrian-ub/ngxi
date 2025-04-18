import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBusinessMessagesIcon],svg[material-symbols-business-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20q-.825 0-1.412-.587T5 18V8.75L1 4h19q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm6.5-2.5l1.4-1.4l-1.1-1.1H18v-2H9zM9 11h9l-4.5-4.5l-1.4 1.4L13.2 9H9z"></svg:path>`,
})
export class MaterialSymbolsBusinessMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
