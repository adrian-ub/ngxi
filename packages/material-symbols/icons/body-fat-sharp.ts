import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBodyFatSharpIcon],svg[material-symbols-body-fat-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16h-1v6.2L-.5 12.025L20 1.8V8h1v2h-4V8h1V5.075L13.6 7.25q.675 1.075 1.038 2.275T15 12t-.363 2.5t-1.062 2.3l4.4 2.175V16H17v-2h4zm-9.25-.125q.6-.85.925-1.838T13 12t-.325-2.013t-.9-1.837L4 12z"></svg:path>`,
})
export class MaterialSymbolsBodyFatSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
