import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRemoveRoadIcon],svg[material-symbols-remove-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13V4h2v9zM4 20V4h2v16zm7-12V4h2v4zm0 6v-4h2v4zm0 6v-4h2v4zm4.425.575l2.125-2.125l-2.125-2.1l1.425-1.425l2.125 2.125l2.125-2.125l1.4 1.425l-2.125 2.125l2.1 2.125L21.1 22l-2.15-2.125L16.825 22z"></svg:path>`,
})
export class MaterialSymbolsRemoveRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
