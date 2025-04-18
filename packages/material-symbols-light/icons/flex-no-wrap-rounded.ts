import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlexNoWrapRoundedIcon],svg[material-symbols-light-flex-no-wrap-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15.48V8.52q0-.344.232-.576t.576-.233h3.154q.343 0 .575.233t.232.575v6.962q0 .343-.232.575t-.575.233H2.808q-.343 0-.576-.233T2 15.481m7.616 0V8.519q0-.343.232-.575q.232-.233.575-.233h3.154q.343 0 .576.233q.231.232.231.575v6.962q0 .343-.232.575q-.232.233-.575.233h-3.154q-.343 0-.575-.233q-.232-.232-.232-.575m7.615 0V8.519q0-.343.232-.575t.576-.233h3.153q.344 0 .576.233t.232.575v6.962q0 .343-.232.575t-.576.233h-3.154q-.343 0-.575-.233t-.232-.575M3 15.288h2.77V8.712H3zm15.423 0H21V8.712h-2.577z"></svg:path>`,
})
export class MaterialSymbolsLightFlexNoWrapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
