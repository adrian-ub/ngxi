import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayPauseRoundedIcon],svg[material-symbols-play-pause-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.575 15.1q-.5.35-1.037.063T5 14.275v-4.55q0-.6.538-.887t1.037.062l3.25 2.275q.425.3.425.825t-.425.825zM14 16q-.425 0-.712-.288T13 15V9q0-.425.288-.712T14 8t.713.288T15 9v6q0 .425-.288.713T14 16m4 0q-.425 0-.712-.288T17 15V9q0-.425.288-.712T18 8t.713.288T19 9v6q0 .425-.288.713T18 16"></svg:path>`,
})
export class MaterialSymbolsPlayPauseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
