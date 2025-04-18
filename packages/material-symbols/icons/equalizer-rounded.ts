import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEqualizerRoundedIcon],svg[material-symbols-equalizer-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18v-4q0-.825.588-1.412T6 12t1.413.588T8 14v4q0 .825-.587 1.413T6 20m6 0q-.825 0-1.412-.587T10 18V6q0-.825.588-1.412T12 4t1.413.588T14 6v12q0 .825-.587 1.413T12 20m6 0q-.825 0-1.412-.587T16 18v-7q0-.825.588-1.412T18 9t1.413.588T20 11v7q0 .825-.587 1.413T18 20"></svg:path>`,
})
export class MaterialSymbolsEqualizerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
