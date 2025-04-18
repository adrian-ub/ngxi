import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestWifiPro2Icon],svg[material-symbols-light-nest-wifi-pro-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21q-1.598 0-2.58-.952q-.984-.952-1.518-2.336q-.535-1.39-.718-2.933Q4 13.237 4 12.025q0-2.242.349-3.922t1.259-2.82q.91-1.154 2.442-1.719Q9.583 3 12 3t3.95.565t2.442 1.718q.91 1.14 1.259 2.82T20 12.025q0 1.212-.184 2.754q-.183 1.542-.718 2.933q-.534 1.384-1.517 2.336T15 21zm7.02-8.942q.193 0 .346-.153t.153-.347q0-2.087-1.373-3.57T11.681 6.5q-.189 0-.339.146t-.15.36t.146.353t.36.141q1.636 0 2.726 1.199t1.095 2.845q0 .214.143.364t.357.15"></svg:path>`,
})
export class MaterialSymbolsLightNestWifiPro2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
