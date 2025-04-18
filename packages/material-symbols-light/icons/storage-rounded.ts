import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStorageRoundedIcon],svg[material-symbols-light-storage-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.308 19.577q-.65 0-1.114-.463t-.463-1.115t.463-1.113t1.114-.463h13.384q.65 0 1.114.464T20.269 18t-.463 1.114t-1.114.462zm0-12q-.65 0-1.114-.463t-.463-1.115t.463-1.113t1.114-.463h13.384q.65 0 1.114.464T20.269 6t-.463 1.114t-1.114.462zm0 6q-.65 0-1.114-.463t-.463-1.115t.463-1.113t1.114-.463h13.384q.65 0 1.114.464T20.269 12t-.463 1.114t-1.114.462zm.772-6.77q.345 0 .575-.232t.23-.578t-.233-.575t-.578-.23t-.575.234t-.23.577t.234.575t.577.23m0 6q.345 0 .575-.233t.23-.578t-.233-.575t-.578-.23t-.575.234t-.23.577t.234.575t.577.23m0 6q.345 0 .575-.233t.23-.578t-.233-.575t-.578-.23t-.575.233t-.23.578t.234.575t.577.23"></svg:path>`,
})
export class MaterialSymbolsLightStorageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
