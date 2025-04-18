import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusOutlineIcon],svg[material-symbols-light-stylus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.021 19.923q-.429.087-.73-.214q-.3-.301-.214-.73l.673-3.256l3.527 3.527zm3.256-.673L4.75 15.723L15.739 4.734q.459-.459 1.136-.459t1.137.46l1.254 1.254q.459.459.459 1.136t-.46 1.137zm8.175-13.808l-10.1 10.081l2.125 2.125l10.08-10.1q.174-.173.174-.432q0-.26-.173-.433l-1.24-1.24q-.174-.174-.434-.174q-.259 0-.432.173"></svg:path>`,
})
export class MaterialSymbolsLightStylusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
