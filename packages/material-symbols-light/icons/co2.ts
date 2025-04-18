import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCo2Icon],svg[material-symbols-light-co2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.077 14.692q-.31 0-.54-.23t-.23-.539v-3.846q0-.31.23-.54t.54-.23h2.846q.31 0 .54.23t.23.54v3.846q0 .31-.23.54t-.54.23zm.115-.884h2.616v-3.616h-2.616zm-7.115.884q-.31 0-.54-.23t-.23-.539v-3.846q0-.31.23-.54t.54-.23h2.846q.31 0 .54.23t.23.54v.615h-.885v-.5H4.192v3.616h2.616v-.5h.884v.615q0 .31-.23.54t-.539.23zm13.23 3v-2.307q0-.31.23-.54t.54-.23h2.23v-1.423h-3v-.884h3.116q.31 0 .54.23t.23.539v1.539q0 .309-.23.539t-.54.23h-2.23v1.423h3v.884z"></svg:path>`,
})
export class MaterialSymbolsLightCo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
