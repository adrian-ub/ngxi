import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDrizzleIcon],svg[material-icon-theme-folder-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="m10.752 27.217l3.127-5.764a1.51 1.51 0 0 0-.573-2.034a1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .573 2.034a1.44 1.44 0 0 0 .71.187a1.46 1.46 0 0 0 1.285-.772m10.305 0l3.127-5.764a1.51 1.51 0 0 0-.574-2.034a1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .574 2.034a1.44 1.44 0 0 0 .709.187a1.46 1.46 0 0 0 1.286-.772m-2.896-5.21l3.326-5.76a1.507 1.507 0 0 0-.518-2.04a1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .519 2.041a1.43 1.43 0 0 0 .74.206a1.46 1.46 0 0 0 1.261-.734m10.31 0l3.327-5.76a1.507 1.507 0 0 0-.518-2.04a1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .518 2.041a1.43 1.43 0 0 0 .74.206a1.46 1.46 0 0 0 1.262-.734Z"></svg:path>`,
})
export class MaterialIconThemeFolderDrizzleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
