import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPenSize5Icon],svg[material-symbols-light-pen-size-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.221 17.779q-.74-.74-.74-1.779t.74-1.779l8-8q.74-.74 1.779-.74t1.779.74t.74 1.779t-.74 1.779l-8 8q-.74.74-1.779.74t-1.779-.74"></svg:path>`,
})
export class MaterialSymbolsLightPenSize5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
