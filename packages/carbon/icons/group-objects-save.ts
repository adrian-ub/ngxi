import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGroupObjectsSaveIcon],svg[carbon-group-objects-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 18.18l-3.59-3.59L9 16l5 5l9-9l-1.41-1.419z"></svg:path><svg:path fill="currentColor" d="M30 8V2h-6v2H8V2H2v6h2v16H2v6h6v-2h16v2h6v-6h-2V8Zm-4-4h2v2h-2ZM4 4h2v2H4Zm2 24H4v-2h2Zm22 0h-2v-2h2Zm-2-4h-2v2H8v-2H6V8h2V6h16v2h2Z"></svg:path>`,
})
export class CarbonGroupObjectsSaveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
