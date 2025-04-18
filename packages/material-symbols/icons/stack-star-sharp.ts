import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarSharpIcon],svg[material-symbols-stack-star-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 18.5L15 17.125l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L15 11.5l-1.05 2.45l-2.625.225l2 1.725zM6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14z"></svg:path>`,
})
export class MaterialSymbolsStackStarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
