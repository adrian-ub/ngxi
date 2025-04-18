import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PieSingleSolidIcon],svg[fluent-mdl2-pie-single-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 0q124 0 238 32t214 90t181 140t140 181t91 214t32 239h-896zm-128 1024h896q0 59-3 114t-11 109t-23 107t-38 108q-57 134-148 242t-206 184t-251 118t-280 42q-133 0-255-34t-230-96t-194-150t-150-195t-97-229t-34-256q0-133 34-255t96-230t150-194t195-150t229-97t256-34h64z"></svg:path>`,
})
export class FluentMdl2PieSingleSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
