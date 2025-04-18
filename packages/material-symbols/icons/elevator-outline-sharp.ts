import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElevatorOutlineSharpIcon],svg[material-symbols-elevator-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h3v-4h1V9.5H6V14h1zm1.5-9.5q.525 0 .888-.363t.362-.887t-.363-.888T8.5 6t-.888.363t-.362.887t.363.888t.887.362M13 11h5l-2.5-4zm2.5 6l2.5-4h-5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsElevatorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
