import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSurroundSoundIcon],svg[material-symbols-surround-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m4.95 1.95q1-1 1.525-2.275T19 12t-.525-2.675T16.95 7.05l-1.4 1.4q.725.725 1.087 1.637T17 12t-.363 1.913t-1.087 1.637zm-9.9 0l1.4-1.4q-.725-.725-1.088-1.638T7 12t.363-1.912T8.45 8.45l-1.4-1.4q-1 1-1.525 2.275T5 12t.525 2.675T7.05 16.95M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsSurroundSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
