import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalLaundryServiceOutlineSharpIcon],svg[material-symbols-light-local-laundry-service-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14v18zm1-1h12V4H6zm6-1.77q1.756 0 2.993-1.237T16.231 14t-1.238-2.993T12 9.769t-2.993 1.238T7.769 14t1.238 2.993T12 18.231m0-.931q-.65 0-1.253-.247t-1.059-.703l4.662-4.661q.456.455.703 1.062q.247.606.247 1.249q0 1.375-.962 2.338T12 17.3M8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m3 0q.425 0 .713-.288T12 6t-.288-.712T11 5t-.712.288T10 6t.288.713T11 7M6 20V4z"></svg:path>`,
})
export class MaterialSymbolsLightLocalLaundryServiceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
