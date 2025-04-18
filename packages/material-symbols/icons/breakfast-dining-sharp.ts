import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBreakfastDiningSharpIcon],svg[material-symbols-breakfast-dining-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V10.45q-.925-.55-1.463-1.462T2 7q0-1.65 1.175-2.825T6 3h12q1.65 0 2.825 1.175T22 7q0 1.075-.537 1.988T20 10.45V21zm8-3.6l4.4-4.4L12 8.6L7.6 13zm0-2.8L10.4 13l1.6-1.6l1.6 1.6z"></svg:path>`,
})
export class MaterialSymbolsBreakfastDiningSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
