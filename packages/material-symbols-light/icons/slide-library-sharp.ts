import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSlideLibrarySharpIcon],svg[material-symbols-light-slide-library-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V7.385h1V18h14v1zm3-3V5h8.554l-1 1H7v9h13V8.446l1-1V16zm6.98-4.327q-.382 0-.717-.147q-.336-.147-.57-.449q.309 0 .568-.153t.258-.443q0-.375.265-.63q.264-.255.639-.255q.356 0 .62.264q.265.265.265.62q0 .518-.395.855t-.932.338m2.371-1.98l-1.063-1.064l4.661-4.637l1.058 1.058z"></svg:path>`,
})
export class MaterialSymbolsLightSlideLibrarySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
