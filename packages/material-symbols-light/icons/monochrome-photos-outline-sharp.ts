import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonochromePhotosOutlineSharpIcon],svg[material-symbols-light-monochrome-photos-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.73q1.567 0 2.65-1.08q1.08-1.083 1.08-2.65t-1.08-2.65T12 9.27t-2.65 1.08Q8.27 11.433 8.27 13t1.081 2.65T12 16.73m0-1q-1.165 0-1.948-.782T9.269 13t.783-1.948T12 10.269t1.948.783t.783 1.948t-.783 1.948t-1.948.783M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm9-1h8V7h-4.012l-1.844-2H12zm0-6"></svg:path>`,
})
export class MaterialSymbolsLightMonochromePhotosOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
