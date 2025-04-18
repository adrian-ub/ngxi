import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitionSlideOutlineSharpIcon],svg[material-symbols-transition-slide-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V4h6v16zm2-1.975h2V5.975H3zM9 20V4h14v16zm2-1.975h10V5.975H11zm-6 0V5.975zm6 0V5.975z"></svg:path>`,
})
export class MaterialSymbolsTransitionSlideOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
