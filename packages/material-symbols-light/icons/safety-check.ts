import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSafetyCheckIcon],svg[material-symbols-light-safety-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m0-4.943q1.671 0 2.836-1.164Q16 13.69 16 12.019t-1.164-2.835T12 8.019T9.165 9.184T8 12.019t1.165 2.836T12 16.019m1.65-1.803l-2.034-2.035V9.135h.769v2.723l1.811 1.811z"></svg:path>`,
})
export class MaterialSymbolsLightSafetyCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
