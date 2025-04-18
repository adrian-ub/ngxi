import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowsMoreUpRoundedIcon],svg[material-symbols-arrows-more-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19q-.425 0-.712-.288T12 18v-8H4q-.425 0-.712-.288T3 9t.288-.712T4 8h9q.425 0 .713.288T14 9v9q0 .425-.288.713T13 19m5-5q-.425 0-.712-.288T17 13V5H9q-.425 0-.712-.288T8 4t.288-.712T9 3h9q.425 0 .713.288T19 4v9q0 .425-.288.713T18 14"></svg:path>`,
})
export class MaterialSymbolsArrowsMoreUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
