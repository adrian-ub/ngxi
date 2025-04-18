import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPrintLockOutlineSharpIcon],svg[material-symbols-light-print-lock-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.789 20.02v-4.308h.903v-1q0-.706.504-1.21t1.21-.502t1.199.503t.491 1.209v1H21v4.307zm1.672-4.308h1.866v-1q0-.426-.249-.684q-.25-.259-.674-.259t-.684.259q-.258.258-.258.683zM4.578 9.615h14.846zM6.993 20v-4H3.577V8.616h16.846v2.807q-.238-.077-.488-.136t-.512-.077V9.616H4.577V15H7v-1.538h7.462q-.189.232-.35.473q-.162.24-.285.527H8V19h5.466q.078.28.203.521q.125.24.264.479zM16 8.616v-3H8v3H7v-4h10v4z"></svg:path>`,
})
export class MaterialSymbolsLightPrintLockOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
