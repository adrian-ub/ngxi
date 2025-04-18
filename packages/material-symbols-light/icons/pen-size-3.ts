import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPenSize3Icon],svg[material-symbols-light-pen-size-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.796 18.204q-.29-.29-.29-.704t.29-.704l11.02-11q.29-.296.694-.293t.694.293t.293.704t-.293.704l-11 11q-.29.29-.704.293t-.704-.293"></svg:path>`,
})
export class MaterialSymbolsLightPenSize3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
