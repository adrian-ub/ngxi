import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRoadIcon],svg[material-symbols-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h2v16zm7 0v-4h2v4zm7 0V4h2v16zm-7-6v-4h2v4zm0-6V4h2v4z"></svg:path>`,
})
export class MaterialSymbolsRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
