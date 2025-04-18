import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutboxSharpIcon],svg[material-symbols-light-outbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm8-3.384q.95 0 1.725-.55t1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55m-.5-3.308V8.619l-2.1 2.1L8.692 10L12 6.692L15.308 10l-.708.72l-2.1-2.1v4.688z"></svg:path>`,
})
export class MaterialSymbolsLightOutboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
