import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMilitaryTechIcon],svg[ic-sharp-military-tech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11V2H7v9l4.66 2.8l-.99 2.34l-3.41.29l2.59 2.24L9.07 22L12 20.23L14.93 22l-.78-3.33l2.59-2.24l-3.41-.29l-.99-2.34zm-4 1.23l-1 .6l-1-.6V3h2z"></svg:path>`,
})
export class IcSharpMilitaryTechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
