import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWeekendOutlineSharpIcon],svg[material-symbols-light-weekend-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V8.923h2V4.962h16v3.961h2V19zm4-4.962h12V8.923h1V5.962H5v2.961h1zM3 18h18V9.923h-2v5.116H5V9.923H3zm9-2.961"></svg:path>`,
})
export class MaterialSymbolsLightWeekendOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
