import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrolleyOutlineIcon],svg[material-symbols-light-trolley-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V5H2.5V4H6v12h15v1zm1.442 3.885q-.613 0-1.037-.425t-.424-1.037t.424-1.037t1.037-.425t1.038.424t.424 1.038t-.424 1.038t-1.038.424M7.77 14.23V9.769h4.462v4.462zm1-1h2.462v-2.462H8.769zm6 1V9.769h4.462v4.462zm1-1h2.462v-2.462H15.77zm3.748 7.654q-.611 0-1.026-.425q-.414-.424-.414-1.037t.414-1.037q.415-.425 1.026-.425q.612 0 1.048.424T21 19.423t-.435 1.038t-1.048.424M8.77 13.23h2.462zm7 0h2.462z"></svg:path>`,
})
export class MaterialSymbolsLightTrolleyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
