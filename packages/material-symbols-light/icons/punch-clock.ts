import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPunchClockIcon],svg[material-symbols-light-punch-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V6.616h2.827V2.769h10.365v3.847H20V21zM7.827 6.615h8.365V3.77H7.827zm4.16 11.231q1.676 0 2.864-1.187t1.187-2.842t-1.187-2.85q-1.188-1.198-2.865-1.198t-2.85 1.197t-1.175 2.851q0 1.654 1.174 2.842t2.851 1.187m1.087-2.419l.527-.527l-1.234-1.254v-2.108h-.731v2.431z"></svg:path>`,
})
export class MaterialSymbolsLightPunchClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
