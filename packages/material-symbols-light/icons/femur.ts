import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFemurIcon],svg[material-symbols-light-femur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 21.094q-.734 0-1.29-.466t-.698-1.201q-.152-.854-.694-1.343q-.541-.49-1.368-.49q-.113 0-.236.013t-.231.032q-.939.178-1.67-.436q-.732-.614-.732-1.559q0-.723.466-1.285t1.207-.703l3.373-.583l3.556-5.102q.23-.346.192-.692t-.327-.616q-.235-.234-.338-.527q-.104-.292-.104-.561q0-.627.402-1.041q.402-.415 1.023-.415q.4 0 .706.141q.305.142.467.273q.206.136.618.326q.413.191 1.051.216q-.107-.587.176-1.12q.284-.532.845-.738q.696-.252 1.356.053t.906.99l1.255 3.505q.252.708-.061 1.345t-.961.867q-.65.242-1.255-.034q-.603-.276-.884-.843h-.213q-.289-.039-.568.067t-.471.356l-4.106 5.89l.602 3.304q.179.939-.435 1.658q-.615.72-1.559.72"></svg:path>`,
})
export class MaterialSymbolsLightFemurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
