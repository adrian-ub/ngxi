import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataDefinitionIcon],svg[carbon-data-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 30a1 1 0 0 1-.707-.293L8.586 19A2 2 0 0 1 8 17.586V10a2 2 0 0 1 2-2h7.586A2 2 0 0 1 19 8.586l10.707 10.707a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 20 30M10 10v7.586l10 10L27.586 20l-10-10Z"></svg:path><svg:path fill="currentColor" d="M12 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8h-2V4H4v24h8Z"></svg:path>`,
})
export class CarbonDataDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
