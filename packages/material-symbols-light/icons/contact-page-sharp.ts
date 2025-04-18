import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContactPageSharpIcon],svg[material-symbols-light-contact-page-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.539q.633 0 1.066-.434t.434-1.066t-.434-1.067q-.433-.433-1.066-.433t-1.066.433t-.434 1.067t.434 1.066q.433.434 1.066.434m-3.5 3.384h7v-.152q0-.465-.248-.792t-.67-.52q-.604-.275-1.256-.406q-.651-.13-1.326-.13t-1.326.13t-1.257.406q-.42.193-.669.52q-.248.327-.248.792zM19 21H5V3h8.577L19 8.423z"></svg:path>`,
})
export class MaterialSymbolsLightContactPageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
