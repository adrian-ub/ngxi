import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShowChartRoundedIcon],svg[material-symbols-light-show-chart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.135 17.442q-.171-.17-.171-.365t.17-.365l5.307-5.306q.459-.46 1.136-.46t1.137.46l2.401 2.402q.193.192.462.183q.27-.01.442-.222l6.208-7.128q.14-.172.338-.172q.197 0 .362.147q.14.14.153.325q.012.186-.128.351l-6.206 7.166q-.46.534-1.155.562q-.697.028-1.206-.482l-2.366-2.365Q9.846 12 9.577 12t-.442.173l-5.27 5.27q-.151.151-.355.16t-.375-.16"></svg:path>`,
})
export class MaterialSymbolsLightShowChartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
