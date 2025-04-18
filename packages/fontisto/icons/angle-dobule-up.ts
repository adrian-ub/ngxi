import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleDobuleUpIcon],svg[fontisto-angle-dobule-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.613 10.065l11.613 11.591L20.874 24l-9.261-9.239L2.352 24L0 21.656zm0-10.065l11.613 11.591l-2.352 2.344l-9.261-9.239l-9.261 9.239L0 11.591z"></svg:path>`,
})
export class FontistoAngleDobuleUpIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
