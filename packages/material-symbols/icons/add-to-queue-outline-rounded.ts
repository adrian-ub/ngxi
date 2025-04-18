import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddToQueueOutlineRoundedIcon],svg[material-symbols-add-to-queue-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12v2q0 .425.288.713T12 15t.713-.288T13 14v-2h2q.425 0 .713-.288T16 11t-.288-.712T15 10h-2V8q0-.425-.288-.712T12 7t-.712.288T11 8v2H9q-.425 0-.712.288T8 11t.288.713T9 12zm-7 7q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1zm0-2h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsAddToQueueOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
