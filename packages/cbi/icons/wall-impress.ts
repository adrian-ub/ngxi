import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallImpressIcon],svg[cbi-wall-impress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.272 2l-5.186.988v18.024l5.186.988l8.642-2.222V3.975Zm-.988 18.519l-3.21-.494v-.494l2.716-.494V4.716l-2.716-.494v-.247l3.21-.494ZM18.173 5.7v12.349l-2.716-.493v.74l2.716.494l-7.161 1.729V3.481l7.161 1.482l-2.716.494V6.2Z"></svg:path>`,
})
export class CbiWallImpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
