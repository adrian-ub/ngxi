import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWandShineSharpIcon],svg[material-symbols-wand-shine-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.275 7.725l-3-3L6.7 3.3l3 3zM12 5.35V1.1h2v4.25zm7.275 13.375l-3-3L17.7 14.3l3 3zm-1.575-11L16.275 6.3l3-3L20.7 4.725zM18.65 12v-2h4.25v2zM5.825 22.425l-4.25-4.25l9.8-9.8Q12.25 7.5 13.5 7.5t2.125.875t.875 2.125t-.875 2.125zm6.275-9.1l2.1-2.125q.3-.3.3-.7t-.3-.7t-.7-.3t-.7.3l-2.125 2.125z"></svg:path>`,
})
export class MaterialSymbolsWandShineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
