import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGroupObjectsNewIcon],svg[carbon-group-objects-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h-2v5h-5v2h5v5h2v-5h5v-2h-5z"></svg:path><svg:path fill="currentColor" d="M30 8V2h-6v2H8V2H2v6h2v16H2v6h6v-2h16v2h6v-6h-2V8Zm-4-4h2v2h-2ZM4 4h2v2H4Zm2 24H4v-2h2Zm22 0h-2v-2h2Zm-2-4h-2v2H8v-2H6V8h2V6h16v2h2Z"></svg:path>`,
})
export class CarbonGroupObjectsNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
