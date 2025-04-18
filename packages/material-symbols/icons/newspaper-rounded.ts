import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewspaperRoundedIcon],svg[material-symbols-newspaper-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V3.6q0-.175.15-.238t.275.063l1.25 1.25l1.3-1.325q.15-.15.35-.15t.35.15L7 4.675L8.325 3.35q.15-.15.35-.15t.35.15l1.3 1.325L11.65 3.35q.15-.15.35-.15t.35.15l1.325 1.325l1.3-1.325q.15-.15.35-.15t.35.15L17 4.675l1.325-1.325q.15-.15.35-.15t.35.15l1.3 1.325l1.25-1.25q.125-.125.275-.062T22 3.6V19q0 .825-.588 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsNewspaperRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
