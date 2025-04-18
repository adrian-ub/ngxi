import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalLaundryServiceSharpIcon],svg[material-symbols-local-laundry-service-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm8-3q2.075 0 3.538-1.463T17 14t-1.463-3.537T12 9t-3.537 1.463T7 14t1.463 3.538T12 19m0-1.7q-.65 0-1.263-.238T9.65 16.35l4.7-4.7q.475.475.713 1.088T15.3 14q0 1.375-.962 2.338T12 17.3M8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m3 0q.425 0 .713-.288T12 6t-.288-.712T11 5t-.712.288T10 6t.288.713T11 7"></svg:path>`,
})
export class MaterialSymbolsLocalLaundryServiceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
