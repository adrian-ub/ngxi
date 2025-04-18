import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixObjectsIcon],svg[ix-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m362.667 266.156l106.666 101.587l-106.666 101.588L256 367.743zm0 57.478l-46.315 44.109l46.315 44.11zM181.333 123.517L320 255.581L181.333 387.644L42.667 255.581zm0 57.468l-78.336 74.586l78.336 74.605zm181.334-138.32L469.333 144.25L362.667 245.839L256 144.251zm0 57.477l-46.315 44.109l46.315 44.11z"></svg:path>`,
})
export class IxObjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
