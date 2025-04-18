import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhonelinkRingIcon],svg[material-symbols-light-phonelink-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.696 14.466l-.719-.72q.396-.333.645-.782q.25-.449.25-.964t-.25-.964t-.645-.782l.72-.72q.536.48.855 1.111t.32 1.355t-.32 1.355t-.856 1.11m2.142 2.143l-.707-.708q.775-.775 1.19-1.784q.416-1.01.416-2.116t-.416-2.116t-1.19-1.784l.708-.708q.917.914 1.407 2.11t.49 2.5t-.49 2.5t-1.407 2.106M7.616 22q-.667 0-1.141-.475T6 20.386V3.615q0-.666.475-1.14T7.615 2h8.77q.666 0 1.14.475T18 3.614v3.308h-1V5.5H7v13h10v-1.423h1v3.298q0 .68-.475 1.153q-.474.472-1.14.472z"></svg:path>`,
})
export class MaterialSymbolsLightPhonelinkRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
