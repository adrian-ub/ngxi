import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhonelinkRingOutlineSharpIcon],svg[material-symbols-light-phonelink-ring-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.696 14.466l-.719-.72q.396-.333.645-.782q.25-.449.25-.964t-.25-.964t-.645-.782l.72-.72q.536.48.855 1.111t.32 1.355t-.32 1.355t-.856 1.11m2.142 2.143l-.707-.708q.775-.775 1.19-1.784q.416-1.01.416-2.116t-.416-2.116t-1.19-1.784l.708-.708q.92.916 1.409 2.108t.489 2.5t-.489 2.5t-1.41 2.108M6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H7zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightPhonelinkRingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
