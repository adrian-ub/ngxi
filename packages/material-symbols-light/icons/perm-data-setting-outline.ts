import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPermDataSettingOutlineIcon],svg[material-symbols-light-perm-data-setting-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v9.17q-.244-.11-.484-.2q-.241-.09-.516-.145V5.421L5.421 20h7.04q.093.262.199.509t.252.491zm2.421-1L20 5.421l-7.29 7.29zm12.502 1.77l-.107-.886q-.474-.105-.89-.32q-.416-.214-.749-.587l-.835.335l-.538-.816l.688-.577q-.165-.517-.165-1.035t.165-1.034l-.688-.577l.538-.815l.835.334q.314-.373.74-.587q.425-.215.899-.32l.107-.885h1l.108.884q.473.106.899.32t.74.588l.834-.334l.538.815l-.688.577q.165.517.165 1.035t-.165 1.034l.688.577l-.538.816l-.835-.335q-.332.373-.749.588q-.416.214-.89.32l-.107.884zm.5-1.732q.902 0 1.528-.626t.626-1.528t-.626-1.527t-1.528-.626t-1.528.626t-.626 1.527t.626 1.528t1.528.626"></svg:path>`,
})
export class MaterialSymbolsLightPermDataSettingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
