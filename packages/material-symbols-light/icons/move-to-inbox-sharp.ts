import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveToInboxSharpIcon],svg[material-symbols-light-move-to-inbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.308L8.692 10l.708-.72l2.1 2.1V6.693h1v4.689l2.1-2.1l.708.719zM4 20V4h16v16zm8-3.384q.95 0 1.725-.55t1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55"></svg:path>`,
})
export class MaterialSymbolsLightMoveToInboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
