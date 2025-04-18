import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEventRepeatSharpIcon],svg[material-symbols-light-event-repeat-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v7.308h-1v-1.692H5V20h7.289v1zm15 2.692q-1.594 0-2.832-.964t-1.664-2.42h.935q.401 1.119 1.354 1.81q.953.69 2.207.69q1.578 0 2.693-1.115T22.807 19t-1.115-2.692T19 15.192q-.917 0-1.754.446q-.836.445-1.446 1.17h1.892v.884h-3.384v-3.384h.884v1.848q.714-.823 1.71-1.336q.996-.512 2.098-.512q1.947 0 3.32 1.372T23.692 19t-1.372 3.32T19 23.692"></svg:path>`,
})
export class MaterialSymbolsLightEventRepeatSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
