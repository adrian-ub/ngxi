import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomDrawerIcon],svg[material-symbols-light-bottom-drawer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM5 13.32q.392-.41.915-.615Q6.436 12.5 7 12.5h10q.564 0 1.086.205t.914.614V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616z"></svg:path>`,
})
export class MaterialSymbolsLightBottomDrawerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
