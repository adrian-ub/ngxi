import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudLeftOutlineIcon],svg[material-symbols-earbud-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20v-8H5q-.825 0-1.412-.587T3 10V6q0-.825.588-1.412T5 4h9v2H5v4h3v10h2V10h4v2h-2v8q0 .825-.587 1.413T10 22zm6-8V2h1q2.5 0 4.25 1.75T21 8t-1.75 4.25T15 14zm2-2.125q1.35-.35 2.175-1.425T19 8t-.825-2.45T16 4.125zM16 8"></svg:path>`,
})
export class MaterialSymbolsEarbudLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
