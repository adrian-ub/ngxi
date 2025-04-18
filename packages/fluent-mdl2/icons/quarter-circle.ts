import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QuarterCircleIcon],svg[fluent-mdl2-quarter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1792H128q0-99 6-192t23-183t42-180t65-182q68-160 164-300t215-258t258-209t294-157t320-97t341-34zm-128 129q-208 8-400 67t-360 161t-307 240t-240 307t-160 360t-68 400h1535z"></svg:path>`,
})
export class FluentMdl2QuarterCircleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
