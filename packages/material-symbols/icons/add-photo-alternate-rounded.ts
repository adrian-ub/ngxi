import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddPhotoAlternateRoundedIcon],svg[material-symbols-add-photo-alternate-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7.45q.5 0 .763.438t.062.937q-.125.4-.2.8T13 6q0 2.075 1.463 3.538T18 11q.425 0 .825-.075t.8-.2q.5-.175.938.075t.437.75V19q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13zm12-8q-.425 0-.712-.288T17 8V7h-1q-.425 0-.712-.288T15 6t.288-.712T16 5h1V4q0-.425.288-.712T18 3t.713.288T19 4v1h1q.425 0 .713.288T21 6t-.288.713T20 7h-1v1q0 .425-.288.713T18 9"></svg:path>`,
})
export class MaterialSymbolsAddPhotoAlternateRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
