import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psVirbIcon],svg[ps-virb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 333H116L2 51h97l68 184l67-184h95zm245-233q0-20-13.5-34T415 52t-34 14t-14 34t14 33.5t34 13.5q19 0 33-13.5t14-33.5"></svg:path>`,
})
export class PsVirbIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
