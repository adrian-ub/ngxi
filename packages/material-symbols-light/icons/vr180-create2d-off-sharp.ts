import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVr180Create2dOffSharpIcon],svg[material-symbols-light-vr180-create2d-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.712q-2.252-.656-3.626-2.511T3 10q0-1.221.396-2.314t1.134-2.01l-2.29-2.29l.708-.707l18.387 18.387l-.708.707l-.773-.773h-9.47v-9.47L8 9.153zM10 3q2.346 0 4.201 1.374T16.711 8h-5.597l-4.26-4.246q.732-.377 1.527-.565T10 3m3.498 7.385H21v7.502zm4.164 8.423l-1.296-1.302l-.866 1.058l-1.136-1.439q-.039-.058-.116-.058t-.115.058l-1.248 1.683z"></svg:path>`,
})
export class MaterialSymbolsLightVr180Create2dOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
