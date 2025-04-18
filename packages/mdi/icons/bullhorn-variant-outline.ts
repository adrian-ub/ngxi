import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBullhornVariantOutlineIcon],svg[mdi-bullhorn-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v2L4 8V6H2v12h2v-2l2 .5v2C6 20.4 7.6 22 9.5 22s3.5-1.6 3.5-3.5v-.2l7 1.7v2h2V2zm-9 16.5c0 .8-.7 1.5-1.5 1.5S8 19.3 8 18.5V17l3 .8zm9-.5L4 14v-4l16-4z"></svg:path>`,
})
export class MdiBullhornVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
