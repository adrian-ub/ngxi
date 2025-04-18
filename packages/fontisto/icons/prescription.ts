import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPrescriptionIcon],svg[fontisto-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.76 2.852h-2.577v1.221h2.584c.655 0 1.186.531 1.186 1.186V21.6c0 .656-.532 1.187-1.187 1.187H2.401A1.187 1.187 0 0 1 1.214 21.6V5.259c0-.656.532-1.187 1.187-1.187h2.584v-1.22H2.408A2.41 2.41 0 0 0-.003 5.263v16.326a2.41 2.41 0 0 0 2.411 2.41h13.351a2.41 2.41 0 0 0 2.411-2.411V5.262a2.41 2.41 0 0 0-2.411-2.411z"></svg:path><svg:path fill="currentColor" d="M12.605 2.225h-1.319a2.225 2.225 0 1 0-4.45 0h-1.31v3.057h7.073V2.225zm-2.258 0h-2.57v-.032a1.286 1.286 0 0 1 2.572 0v.034v-.002zm-4.4 6.287h9.458v1.17H5.947zm0 4.898h9.458v1.17H5.947zm0 4.84h9.458v1.176H5.947zM2.628 7.757h2.68v2.68h-2.68zm0 4.898h2.68v2.68h-2.68zm0 4.842h2.68v2.68h-2.68z"></svg:path>`,
})
export class FontistoPrescriptionIcon {
  readonly viewBox = input("0 0 18 24")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
