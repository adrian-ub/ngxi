import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCarouselRoundedIcon],svg[material-symbols-view-carousel-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17q-.425 0-.712-.288T2 16V8q0-.425.288-.712T3 7h2q.425 0 .713.288T6 8v8q0 .425-.288.713T5 17H3Zm5 2q-.425 0-.712-.288T7 18V6q0-.425.288-.712T8 5h8q.425 0 .713.288T17 6v12q0 .425-.288.713T16 19H8Zm11-2q-.425 0-.712-.288T18 16V8q0-.425.288-.712T19 7h2q.425 0 .713.288T22 8v8q0 .425-.288.713T21 17h-2Z"></svg:path>`,
})
export class MaterialSymbolsViewCarouselRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
