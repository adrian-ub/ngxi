import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenAddRoundedIcon],svg[material-symbols-light-splitscreen-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-1.73q-.213 0-.357-.144t-.144-.357t.144-.356t.356-.143H19v-1.73q0-.213.144-.357t.357-.144t.356.144t.143.356V19h1.73q.213 0 .357.144t.144.357t-.144.356t-.356.143H20v1.73q0 .213-.144.357t-.357.144t-.356-.144t-.143-.356zM5.616 10.635q-.691 0-1.153-.463T4 9.011V5.624q0-.699.463-1.161T5.616 4h12.769q.69 0 1.153.463T20 5.623v3.388q0 .699-.462 1.161t-1.153.463zm0 9.365q-.691 0-1.153-.462T4 18.379v-3.373q0-.696.463-1.159t1.153-.462h12.769q.517 0 .903.28q.385.28.539.72v.042q-.11-.03-.221-.036q-.112-.006-.222-.006q-2.042 0-3.492 1.414t-1.508 3.432q0 .206.006.394t.018.375z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
